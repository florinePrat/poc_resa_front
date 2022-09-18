<template>
  <div class="home">
    <div>
      <div>
        <router-link to="/choosedepartment" class="uk-margin-xlarge-left"><a class="uk-button uk-button-default uk-margin-xlarge-left"><img alt="Vue logo" src="../assets/favicon.png" class="uk-width-small">Réserver un bureau</a></router-link>
      </div>
    </div>

    <div >
      <hr class="uk-divider-icon"/>
    </div>
   
    
    <div >
      <router-link to="/searchpeople" class="uk-margin-xlarge-left"><a class="uk-button uk-button-default uk-margin-xlarge-left"><img alt="Vue logo" src="../assets/favicon.png" class="uk-width-small"> Trouver quelqu'un</a></router-link>
    </div>

   
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
},
  mounted() {
  }
}
</script>
