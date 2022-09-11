<template>
  <div>
    <Nav/>

    <div class="uk-margin-xlarge-left uk-margin-xlarge-right">
      <p>Choisi la date de réservation : </p>
      <Datepicker 
        v-model="date" 
        :minDate="new Date()" 
        format="dd/MM/yyyy" 
        ignoreTimeValidation
        :disabledWeekDays="[6, 0]"
        :enableTimePicker="false"
        locale="FR"
        cancelText="abandoner" 
        selectText="confirmer"
        :format-locale="fr"

        />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import { fr } from 'date-fns/locale';

export default {
  name: 'ChooseYourDepartment',
  components: {
    Nav,
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

  },
  mounted() {
    document.title = 'Yooz - Réservation bureau';
    
  }
}
</script>
