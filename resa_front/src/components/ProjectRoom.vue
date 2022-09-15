<template>

    <div class="uk-margin-medium uk-padding-medium">
        <div class="uk-position-top-center uk-margin-xlarge-top">
            <p class="uk-text-lead">Salles Projet</p>
        </div>
       
        <div class="uk-child-width-1-2 uk-text-center uk-margin-xlarge-top uk-margin-medium-right uk-margin-small-left" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body" style="height: 250px">
                    <p class="uk-position-top uk-background-muted"> Fenetre </p>
                        <button class="uk-button uk-position-top-left uk-margin-medium-top success"> 211-11 Box 3 </button>  
                        <button class="uk-button uk-position-center-left"> 211-12 Box 2  </button>
                        <button class="uk-button uk-position-bottom-left uk-margin-medium-bottom"> 211-13 Box 1 </button>

                        <button class="uk-button uk-position-small uk-position-top-left uk-margin-medium-top uk-margin-xlarge-left success"> 211-6 </button>  
                        <button class="uk-button uk-position-small uk-position-center-left uk-margin-xlarge-left"> 211-7  </button>
                        <button class="uk-button uk-position-small uk-position-bottom-left uk-margin-medium-bottom uk-margin-xlarge-left"> 211-8 </button>

                        <button class="uk-button uk-position-small uk-position-top-center uk-margin-medium-top"> 211-5 </button>  
                        <button class="uk-button uk-position-small uk-position-bottom-center uk-margin-medium-bottom success"> 211-9 </button>
                        
                        
                        <button class="uk-button uk-position-top-right uk-margin-medium-top uk-margin-xlarge-right"> 211_4 </button>  
                        <button class="uk-button uk-position-top-right uk-margin-medium-top success"> 211_3 </button>

                        <button class="uk-button uk-position-center-right"> 211_2 </button>  
                        <button class="uk-button uk-position-center-right uk-margin-medium-top"> 211_1 </button>
                        <button class="uk-button uk-position-bottom-right uk-margin-medium-bottom"> 211-10 </button>

                    <p class="uk-position-bottom uk-background-muted"> 211 </p>
                </div>
            </div>
            <div>
                <div class="uk-child-width-1-2 uk-text-center" uk-grid="masonry: true">
                    <div>
                        <div class="uk-card uk-card-default uk-card-body" style="height: 200px">
                            <p class="uk-position-top uk-background-muted"> Fenetre </p>
                                <button class="uk-button"> 232_4 </button>   <button class="uk-button"> 232_3 </button>
                                <button class="uk-button uk-position-center-left"> 232_2 </button>  
                                <button class="uk-button uk-position-center-left uk-margin-medium-top success"> 232_1 </button>
                            <p class="uk-position-bottom uk-background-muted"> 232 </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body"  style="height: 200px">
                            <p class="uk-position-top uk-background-muted"> Fenetre </p>
                                <button class="uk-button"> 232_4 </button>   <button class="uk-button"> 232_3 </button>
                                <button class="uk-button uk-position-center-left uk-margin-small-top"> 232_2 </button>  
                                <button class="uk-button uk-position-center-right uk-margin-small-top success"> 232_1 </button>
                            <p class="uk-position-bottom uk-background-muted"> 261 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    name: 'ProjectRoom',
    mounted() {
        this.data = [
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
        ];

    }

      
};
</script>
