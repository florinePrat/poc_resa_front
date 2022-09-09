<template>
  <div class="home">
    <Nav/>

    
    <ProjectRoom/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectRoom from '@/components/ProjectRoom.vue';
import Nav from '@/components/Nav.vue';

export default {
  name: 'BookingDesk',
  components: {
    ProjectRoom,
    Nav
},
  mounted() {
    document.title = 'Yooz - Réservation bureau'
  }
}
</script>
