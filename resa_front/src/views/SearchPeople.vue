<template>
  <div class="home">
    <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
        <div><div></div></div>
        <div>
            <div class="uk-margin-large-top">
              <div class="uk-margin">
                  <form class="uk-search uk-search-default">
                      <a href="" class="uk-search-icon-flip" uk-search-icon></a>
                      <input class="uk-search-input" type="search" placeholder="Trigramme">
                  </form>
              </div>
            </div>
        </div>
        <div><div></div></div>
    </div>

    <div class="uk-margin-xlarge-left uk-margin-xlarge-right uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
        <div class="uk-width-auto@s"><div>
        
          <img alt="Vue logo" class="uk-width-small uk-margin-medium-left" src="../assets/images/logo_yooz.png">
        </div></div>
        <div class="uk-width-auto@s">
            <div>
             FPR 
            </div>
        </div>
        <div class="uk-width-auto@s">
            <div>
                <div class="uk-card uk-card-default uk-card-body"  style="height: 200px">
                    <p class="uk-position-top uk-background-muted"> Fenetre </p>
                        <button> 232_4 </button>   <button> 232_3 </button>
                        <button class="uk-position-small uk-position-center-left uk-margin-small-top"> 232_2 </button>  
                        <button class="uk-position-small uk-position-center-right uk-margin-small-top success"> 232_1 </button>
                    <p class="uk-position-bottom uk-background-muted"> 261 </p>
                </div>
            </div>
        </div>
    </div>
      
   
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SearchPeople',
  components: {
  },
  mounted() {

  }
}
</script>
