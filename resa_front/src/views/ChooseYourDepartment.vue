<template>
  <div>

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
        cancelText="Abandoner" 
        selectText='Confirmer'
        :format-locale="fr"

        />
    </div>

    <div class="uk-margin-xlarge-left uk-margin-xlarge-right uk-margin-medium-top">
      <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center" uk-grid>
         
          <div v-for="(item, key) in deskAvailable" v-bind:key="key">
             <router-link :to="{name : 'Bookingdesk', params:{department : item.name, date : date.toLocaleDateString('fr')}}">
                <div class="uk-card uk-card-default uk-card-body">
                  {{item.name}} <br> {{item.nb.length}} bureaux disponibles
                </div>
             </router-link>
          </div>
      </div>
      <hr> <label class="uk-text-meta "><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère dans mon département</label>

    </div>


    
  </div>
</template>

<script>
// @ is an alias to /src
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';
import { fr } from 'date-fns/locale';
import { getavailableDesks } from '@/utils/desks/getAvailableDesks';

export default {
  name: 'ChooseYourDepartment',
  components: {
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
      data : [],
      deskAvailable : []
    };
  },
  watch: {
    // whenever question changes, this function will run
    date(newDate, oldDate) {
      console.log({newDate, oldDate});
      this.getDesksByDate(newDate)
    }
  },
  mounted() {
    console.log(this.date.toLocaleDateString("fr"))

    this.getDesksByDate(this.date);
  },

  methods : {
    getDesksByDate(date){
      getavailableDesks(date.toLocaleDateString("fr")).then((res) => {

        this.data = res.data.availableDesks

        let deskLocation = this.data.map(function(item){ return item.location });
        console.log(deskLocation);

        deskLocation.forEach(dep => {
          let myNumber = deskLocation.filter(value => value.department === dep.department);
          this.deskAvailable.push({
            name : dep.department,
            nb : myNumber
          })
        });

        const names = this.deskAvailable.map(item => item.name);
        this.deskAvailable = this.deskAvailable.filter(({name}, index) => !names.includes(name, index + 1)); 

        console.log(this.deskAvailable)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

}
</script>