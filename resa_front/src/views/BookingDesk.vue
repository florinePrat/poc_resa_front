<template>
  <div class="home">
    <div class="uk-position-top-center uk-margin-xlarge-top">
        <p class="uk-text-lead">Salle {{$route.params.department}} : le {{$route.params.date}}</p>
    </div>
    <ProjectRoom :date="$route.params.date" :searchPeople="false" v-if="$route.params.department === 'PROJET'"/>
    <SalesRoom :date="$route.params.date" :searchPeople="false" v-else-if="$route.params.department === 'SALES'"/>
    <MktRoom :date="$route.params.date" :searchPeople="false" v-else-if="$route.params.department === 'MKT'"/>
    <DevRoom :date="$route.params.date" :searchPeople="false" v-else-if="$route.params.department === 'DEV'"/>

  </div>
</template>

<script>
// @ is an alias to /src
import ProjectRoom from '@/components/ProjectRoom.vue';
import SalesRoom from '@/components/SalesRoom.vue';
import DevRoom from '@/components/DevRoom.vue';
import MktRoom from '@/components/MktRoom.vue';
export default {
  name: 'BookingDesk',
  components: {
    ProjectRoom,
    SalesRoom,
    DevRoom,
    MktRoom
  },
  mounted() {
    console.log(this.$route.params.department)
    console.log(this.$route.params.date)
  }
}
</script>
