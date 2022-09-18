<template>
  <div class="home">
    <div class="uk-position-top-center uk-margin-xlarge-top">
        <p class="uk-text-lead">Salles Projet : le {{$route.params.date}}</p>
    </div>
    <ProjectRoom :date="$route.params.date" :searchPeople="false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectRoom from '@/components/ProjectRoom.vue';

export default {
  name: 'BookingDesk',
  components: {
    ProjectRoom
  },
  mounted() {
    console.log(this.$route.params.department)
    console.log(this.$route.params.date)
  }
}
</script>
