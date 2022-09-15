<template>
  <div class="home">
    <ProjectRoom/>
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
  }
}
</script>
