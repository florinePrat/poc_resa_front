<template>
  <div class="home">
    <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
        <div><div></div></div>
        <div>
            <div class="uk-margin-large-top">
              <div class="uk-margin">
                  <div class="uk-search uk-search-default">
                      <a class="uk-search-icon-flip" uk-search-icon></a>
                      <input class="uk-search-input" placeholder="Trigramme" v-model="trigramme">
                  </div>
              </div>
            </div>
        </div>
        <div><div></div></div>
    </div>

    <div v-if="trigramme">
      <div class="uk-margin-xlarge-left uk-margin-xlarge-right uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
        <div class="uk-width-auto@s"><div>
        
          <img alt="Vue logo" class="uk-width-small uk-margin-medium-left" src="../assets/images/logo_yooz.png">
        </div></div>
        <div class="uk-width-auto@s">
            <div>
             {{trigramme}} 
            </div>
        </div>
      </div>
      <ProjectRoom :date="$route.params.date" :searchPeople="true" trigramme="FPR" />

    </div>

    
      
   
  </div>
</template>

<script>
import ProjectRoom from '@/components/ProjectRoom.vue';
// @ is an alias to /src

export default {
  name: 'SearchPeople',
  components: {
    ProjectRoom
  },
  data() {
    return {
      trigramme : null,
    };
  },
  mounted() {

  }
}
</script>
