<template>

    <div class="uk-margin-medium uk-padding-medium">
        <div class="uk-position-top-center uk-margin-xlarge-top">
            <p class="uk-text-lead">Salles Projet : le {{date}}</p>
        </div>




        <div class="uk-grid-match uk-child-width-expand@s uk-text-center uk-margin-xlarge-top uk-margin-small-right uk-margin-small-left" uk-grid>
            <div class="uk-width-expand@m">
                <div class="uk-card uk-card-default uk-card-body" style="height: 280px">
                    <p class="uk-position-top uk-background-muted"> Fenetre </p>
                        <button class="uk-button uk-position-top-left uk-margin-medium-top" data-room="211" data-desk-id="11"> 211-11 Box 3 </button>  
                        <button class="uk-button uk-position-center-left" data-room="211" data-desk-id="12"> 211-12 Box 2  </button>
                        <button class="uk-button uk-position-bottom-left uk-margin-medium-bottom" data-room="211" data-desk-id="13"> 211-13 Box 1 </button>

                        <button class="uk-button uk-position-small uk-position-top-left uk-margin-medium-top uk-margin-xlarge-left" data-room="211" data-desk-id="6"> 211-6 </button>  
                        <button class="uk-button uk-position-small uk-position-center-left uk-margin-xlarge-left" data-room="211" data-desk-id="7"> 211-7  </button>
                        <button class="uk-button uk-position-small uk-position-bottom-left uk-margin-medium-bottom uk-margin-xlarge-left" data-room="211" data-desk-id="8"> 211-8 </button>

                        <button class="uk-button uk-position-small uk-position-top-center uk-margin-medium-top" data-room="211" data-desk-id="5"> 211-5 </button>  
                        <button class="uk-button uk-position-small uk-position-bottom-center uk-margin-medium-bottom" data-room="211" data-desk-id="9"> 211-9 </button>
                        
                        
                        <button class="uk-button uk-position-top-right uk-margin-medium-top uk-margin-xlarge-right" data-room="211" data-desk-id="4"> 211_4 </button>  
                        <button class="uk-button uk-position-top-right uk-margin-medium-top" data-room="211" data-desk-id="3"> 211_3 </button>

                        <button class="uk-button uk-position-center-right" data-room="211" data-desk-id="2"> 211_2 </button>  
                        <button class="uk-button uk-position-center-right uk-margin-medium-top" data-room="211" data-desk-id="1"> 211_1 </button>
                        <button class="uk-button uk-position-bottom-right uk-margin-medium-bottom" data-room="211" data-desk-id="10"> 211-10 </button>

                    <p class="uk-position-bottom uk-background-muted"> 211 </p>
                </div>
            </div>
            <div class="uk-width-auto">
                <div class="uk-card uk-card-default uk-card-body" style="height: 200px">
                    <p class="uk-position-top uk-background-muted"> Fenetre </p>
                        <button class="uk-button" data-room="232" data-desk-id="4"> 232_4 </button>   <button class="uk-button" data-room="232" data-desk-id="3"> 232_3 </button>
                        <button class="uk-button uk-position-center-left" data-room="232" data-desk-id="2"> 232_2 </button>  
                        <button class="uk-button uk-position-center-left uk-margin-medium-top" data-room="232" data-desk-id="1"> 232_1 </button>
                    <p class="uk-position-bottom uk-background-muted"> 232 </p>
                </div>
            </div>
            <div class="uk-width-auto">
                <div class="uk-card uk-card-default uk-card-body" style="height: 200px">
                    <p class="uk-position-top uk-background-muted"> Fenetre </p>
                        <button class="uk-button" data-room="261" data-desk-id="4"> 261_4 </button>   <button class="uk-button" data-room="261" data-desk-id="3"> 261_3 </button>
                        <button class="uk-button uk-position-center-left uk-margin-small-top" data-room="261" data-desk-id="2"> 261_2 </button>  
                        <button class="uk-button uk-position-center-right uk-margin-small-top" data-room="261" data-desk-id="1"> 261_1 </button>
                    <p class="uk-position-bottom uk-background-muted"> 261 </p>
                </div>
            </div>
         </div>


    </div>

</template>


<script>
import { getavailableDesksByDepartment } from '@/utils/desks/getAvailableDesksByDepartment';
export default {
    name: 'ProjectRoom',
    props: {
        date: new Date
    },
    data() {
    return {
      storeElement : null,
      storeEvent : null,
    };
  },
    mounted() {
        getavailableDesksByDepartment(this.date, "PROJET").then((res) => {
            console.log(res.data.availableDesks)
            document.querySelectorAll("button[data-room]").forEach(el => {
                const room = parseInt(el.dataset.room)
                const deskId = el.dataset.deskId
                const deskInfo = res.data.availableDesks.find(e => e.location.room === room && e.location.number === deskId)
                if (deskInfo) {
                    el.classList.add("success")
                    el.setAttribute("uk-tooltip", deskInfo.itemList.map(e => `title:${deskInfo.name} : ${e._id.name}`).reduce((prev, next) => `${prev}\n${next}`))
                    const onClick = () => {
                        this.book(deskInfo._id) 
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

        /* this.data = [
        {
            _id : "fverageiaogh545",
            name : "Batman",
            location : {
                department : "Project",
                room : "211",
                nb : "1"
            },
            itemList : [
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            ]
        },
        {
            _id : "fverageiaogh545",
            name : "Spiderman",
            location : {
                department : "Project",
                room : "211",
                nb : "2"
            },
            itemList : [
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            ]
        },
        {
            _id : "fverageiaogh545",
            name : "Megamind",
            location : {
                department : "Project",
                room : "232",
                nb : "3"
            },
            itemList : [
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            {
                _id : "brgyuzafgel545",
                nb : 2
            },
            ]
        },
        ]; */

    },
    methods :{
        book(id){
            console.log("booked", id);
        }
    },

    beforeUnmount() {
        this.storeElement.removeEventListener('click',this.storeEvent)
    }

      
};
</script>
