<template>
    <div>
        <div class="uk-grid-match uk-text-center uk-margin-xlarge-top uk-margin-xlarge-right uk-margin-xlarge-left" uk-grid>
            <div class="uk-width-expend@m">
                <div class="uk-card uk-card-default uk-card-body" style="height: 290px">
                    <p style="top:100px" class="uk-position-right uk-background-muted"> Fenetre </p>

                        <div style="position:absolute; top: 75%; left: 75%;" >
                            <button class="uk-button" data-room="171" data-desk-id="C"> 171-C </button>  
                            <button class="uk-button" data-room="171" data-desk-id="A"> 171-A </button>  
                        </div>

                        <div style="position:absolute; top: 40%; left: 75%;" >
                            <button class="uk-button" data-room="171" data-desk-id="D"> 171-D </button>  
                            <button class="uk-button" data-room="171" data-desk-id="B"> 171-B </button>  
                        </div>

                        <div style="position:absolute; top: 1%; left: 80%;" >
                            <button class="uk-button" data-room="171" data-desk-id="172"> Salle 172 </button>  
                        </div>

                        <div style="position:absolute; top: 40%; left: 40%;" >
                            <button class="uk-button" data-room="171" data-desk-id="G"> 171-G </button>  
                            <button class="uk-button" data-room="171" data-desk-id="F"> 171-F </button>  
                        </div>
                        <div style="position:absolute; top: 75%; left: 40%;" >
                            <button class="uk-button" data-room="171" data-desk-id="H"> 171-H </button>  
                            <button class="uk-button" data-room="171" data-desk-id="E"> 171-E </button>  
                        </div>

                        <div style="position:absolute; top: 1%; left: 1%;" >
                            <button class="uk-button" data-room="171" data-desk-id="N"> 171-N </button>  
                            <button class="uk-button" data-room="171" data-desk-id="M"> 171-M </button>  
                        </div>
                        <div style="position:absolute; top: 14%; left: 1%;" >
                            <button class="uk-button" data-room="171" data-desk-id="L"> 171-L </button>  
                        </div>

                        <div style="position:absolute; top: 50%; left: 1%;" >
                            <button class="uk-button" data-room="171" data-desk-id="K"> 171-K </button>  
                            <button class="uk-button" data-room="171" data-desk-id="J"> 171-J </button>  
                        </div>
                        <div style="position:absolute; top: 63%; left: 1%;" >
                            <button class="uk-button" data-room="171" data-desk-id="I"> 171-I </button>  
                        </div>
                       
                    <p class="uk-position-bottom uk-background-muted"> 171 </p>
                </div>
            </div>
        
         </div>
    </div>
</template>
<script>
import { getavailableDesksByDepartment } from '@/utils/desks/getAvailableDesksByDepartment';
import { getBookingByUserByDate } from '@/utils/bookings/getBookingByUserByDate';
import { createBooking } from '@/utils/bookings/createBooking';
import UIkit from 'uikit';
export default {
    name: 'MktRoom',
    props: {
        date: new Date,
        searchPeople: Boolean,
        trigramme: String
    },
    data() {
        return {
        storeElement : null,
        storeEvent : null,
        };
    },
    mounted() {
        if(this.searchPeople){
            console.log(this.trigramme)
            this.searchPeopleByTri(this.trigramme, '18/09/2022')
        }else{
            this.getAvailableDesks();
        }
    },
    methods :{
        book(idDesk, nameDesk){
            console.log()
            createBooking(idDesk, this.date).then((res)=>{
                UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'> Vous venez de réserver le bureau " + nameDesk + " à la date du "+ this.date+". 🤞</p>");
                console.log(res.data.booking)
                this.getAvailableDesks();
            }).catch((err)=>{
                if(err.response.data.error){
                    UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>" + err.response.data.error + " ❌</p>");
                }
                else{
                    console.log(err)
                }
                
            })
        },

        getAvailableDesks(){
            getavailableDesksByDepartment(this.date, "DEV").then((res) => {
            console.log(res.data.availableDesks)
            document.querySelectorAll("button[data-room]").forEach(el => {
                el.classList.remove("success");
                const room = parseInt(el.dataset.room)
                const deskId = el.dataset.deskId
                const deskInfo = res.data.availableDesks.find(e => e.location.room === room && e.location.number === deskId)
                if (deskInfo) {
                    el.classList.add("success")
                    el.setAttribute("uk-tooltip", deskInfo.itemList.map(e => `title:${deskInfo.name} : ${e._id.name}`).reduce((prev, next) => `${prev}\n${next}`))
                    const onClick = () => {
                        this.book(deskInfo._id, deskInfo.name)
                    }
                    el.addEventListener('click', onClick)
                    // el.textContent += " " + deskInfo.name;
                    this.storeElement = el;
                    this.storeEvent = onClick;
                } else {
                    el.disabled = true;
                }
            })
            })
            .catch((err) => {
                console.log(err)
            })
        },

        searchPeopleByTri(trigramme, date){
            getBookingByUserByDate(trigramme, date).then(res => {
                console.log(res.data.userBooking)
                document.querySelectorAll("button[data-room]").forEach(el => {
                    el.classList.remove("success");
                    const room = parseInt(el.dataset.room);
                    const deskId = el.dataset.deskId;
                    if (res.data.userBooking.idDesk.location.room === room && res.data.userBooking.idDesk.location.number === deskId) {
                        el.classList.add("success")
                    } else {
                        el.disabled = true;
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
        }




    },

    beforeUnmount() {
        this.storeElement.removeEventListener('click',this.storeEvent)
    }

      
};
</script>