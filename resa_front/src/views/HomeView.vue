<template>
  <div class="home">
    <Nav/>
    <div>
      <div>
        <router-link to="/choosedepartment" class="uk-margin-xlarge-left"><a class="uk-button uk-button-default uk-margin-xlarge-left"><img alt="Vue logo" src="../assets/favicon.png" class="uk-width-small">Réserver un bureau</a></router-link>
      </div>
    </div>

    <div >
      <hr class="uk-divider-icon"/>
    </div>
   
    
    <div >
      <router-link to="/credentials" class="uk-margin-xlarge-left"><a class="uk-button uk-button-default uk-margin-xlarge-left"><img alt="Vue logo" src="../assets/favicon.png" class="uk-width-small"> Trouver quelqu'un</a></router-link>
    </div>

   
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';

export default {
  name: 'HomeView',
  components: {
    Nav,
},
  mounted() {
    document.title = 'Yooz - Home'
  }
}
</script>
