<template>
  <div class="home">
    <Nav msg="Welcome to Your Vue.js App" />
    <img alt="Vue logo" src="../assets/favicon.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';

export default {
  name: 'HomeView',
  components: {
    Nav
  },
  mounted() {
    document.title = 'Yooz - Réservation bureau'
  }
}
</script>
