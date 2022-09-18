<template>
  <div class="home">
    <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
        <div><div></div></div>
        <div>
            <div class="uk-margin-large-top">
              <div class="uk-margin">
                  <Datepicker 
                    v-model="date" 
                    :minDate="new Date()" 
                    format="dd/MM/yyyy" 
                    ignoreTimeValidation
                    :disabledWeekDays="[6, 0]"
                    :enableTimePicker="false"
                    locale="FR"
                    cancelText="Abandoner" 
                    selectText='Confirmer'
                    :format-locale="fr"
                    />

                  <div class="uk-search uk-search-default">
                      <a class="uk-search-icon-flip" uk-search-icon></a>
                      <input class="uk-search-input" placeholder="Trigramme" v-model="trigramme">
                  </div>
              </div>
            </div>
        </div>
        <div><div></div></div>
    </div>

    <div v-if="trigramme && date">
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
      <ProjectRoom :date="date.toLocaleDateString('fr')" :searchPeople="true" trigramme="FPR" />

    </div>

    
      
   
  </div>
</template>

<script>
import ProjectRoom from '@/components/ProjectRoom.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import { fr } from 'date-fns/locale';
// @ is an alias to /src

export default {
  name: 'SearchPeople',
  components: {
    ProjectRoom,
    Datepicker
  },
  setup() {
    const date = ref(new Date());
    return {
        date,
        fr
    }
  },
  data() {
    return {
      trigramme : null,
    };
  },
  watch: {
    // whenever question changes, this function will run
    date(newDate, oldDate) {
      console.log({newDate, oldDate});
    }
  },
  mounted() {

  }
}
</script>
