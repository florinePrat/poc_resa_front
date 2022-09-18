<template>
    <div>
        <div class="uk-grid-match uk-child-width-expand@s uk-text-center uk-margin-xlarge-top uk-margin-xlarge-right uk-margin-xlarge-left" uk-grid>
            <div class="uk-width-expand@m">
                <div class="uk-card uk-card-default uk-card-body" style="height: 280px">
                    <p class="uk-position-top uk-background-muted"> Fenetre </p>

                        <div style="position:absolute; top: 14%; left: 1%;" >
                            <button class="uk-button" data-room="162" data-desk-id="1"> 162-1 </button>  
                            <button class="uk-button" data-room="162" data-desk-id="2"> 162-2 </button>  
                        </div>
                        <div style="position:absolute; top:27%; left: 5%;" >
                            <button class="uk-button" data-room="162" data-desk-id="3"> 162-3  </button>
                        </div>

                        <div style="position:absolute; top: 14%; left: 26%;" >
                            <button class="uk-button" data-room="162" data-desk-id="4"> 162-4 </button>  
                            <button class="uk-button" data-room="162" data-desk-id="5"> 162-5 </button>  
                        </div>
                        <div style="position:absolute; top:27%; left: 30%;" >
                            <button class="uk-button" data-room="162" data-desk-id="6"> 162-6  </button>
                        </div>

                        <div style="position:absolute; top: 14%; left: 56%;" >
                            <button class="uk-button" data-room="162" data-desk-id="7"> 162-7 </button>  
                            <button class="uk-button" data-room="162" data-desk-id="8"> 162-8 </button>  
                        </div>
                        <div style="position:absolute; top:27%; left: 60%;" >
                            <button class="uk-button" data-room="162" data-desk-id="9"> 162-9  </button>
                        </div>

                        <div style="position:absolute; top: 14%; left: 81%;" >
                            <button class="uk-button" data-room="162" data-desk-id="10"> 162-10 </button>  
                            <button class="uk-button" data-room="162" data-desk-id="11"> 162-11 </button>  
                        </div>
                        <div style="position:absolute; top:27%; left: 86%;" >
                            <button class="uk-button" data-room="162" data-desk-id="12"> 162-12  </button>
                        </div>
                       
                        <button class="uk-button uk-position-bottom-left uk-margin-medium-bottom" data-room="162" data-desk-id="17"> 162-17 </button>
                        <button class="uk-button uk-position-small uk-position-bottom-left uk-margin-medium-bottom uk-margin-large-left" data-room="162" data-desk-id="16"> 162-16 </button>
                        <button class="uk-button uk-position-bottom-center uk-margin-medium-bottom" data-room="162" data-desk-id="15"> 162-15 </button>
                        <button class="uk-button uk-position-bottom-right uk-margin-medium-bottom" data-room="162" data-desk-id="14"> 162-14 </button>
                        
                    
                     

                    <p class="uk-position-bottom uk-background-muted"> 162 </p>
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
    name: 'SalesRoom',
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
            getavailableDesksByDepartment(this.date, "SALES").then((res) => {
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