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
         
          <div v-for="(item, key) in deskAvailable" v-bind:key="key">
             <router-link :to="{name : 'Bookingdesk', params:{department : item.name}}">
                <div class="uk-card uk-card-default uk-card-body">
                  {{item.name}} <br> {{item.nb.length}} bureaux disponibles <br> <!-- <hr class="uk-divider-small uk-text-small"/> <label class="uk-text-meta"><input class="uk-checkbox" type="checkbox"> M'avertir si un bureau se libère</label> -->
                </div>
             </router-link>
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
      data : [],
      deskAvailable : []
    };
  },
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
          room : "211",
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
      {
        _id : "fverageiaogh545",
        name : "Thor",
        location : {
          department : "Project",
          room : "261",
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
        name : "LadyWoman",
        location : {
          department : "Sales",
          room : "52",
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
        name : "Superbassman",
        location : {
          department : "SDR",
          room : "B",
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
        name : "DeadPool",
        location : {
          department : "DEV",
          room : "9",
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
        name : "Batman",
        location : {
          department : "DEV",
          room : "1",
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
        name : "Batman",
        location : {
          department : "Fidé",
          room : "21",
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
        name : "Batman",
        location : {
          department : "Sales",
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
        name : "Batman",
        location : {
          department : "Fidé",
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
        name : "Batman",
        location : {
          department : "DEV",
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
      }
    ];

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

    console.log(this.date.toLocaleDateString("fr"))
    getavailableDesks(this.date.toLocaleDateString("fr")).then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },

  methods : {
  }

}
</script>