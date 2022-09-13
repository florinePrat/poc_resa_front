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
        cancelText="abandoner" 
        selectText="confirmer"
        :format-locale="fr"

        />
    </div>

    <div class="uk-margin-xlarge-left uk-margin-xlarge-right uk-margin-medium-top">
      <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center" uk-grid>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                DEV <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                Fidé <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                Mkt <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                P2P <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div>
            <router-link to="/bookingdesk">
              <div class="uk-card uk-card-default uk-card-body">
                PROJET <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
            </router-link>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                R&D <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                Sales <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                SDR <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div><div></div></div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                Support <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                Test-op <br> {{nbDeskAvailable}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
              </div>
          </div>
      </div>
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
      nbDeskAvailable : "3"
    };
  },
  mounted() {
    console.log(this.date.toLocaleDateString("fr"))
    getavailableDesks(this.date.toLocaleDateString("fr")).then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>
