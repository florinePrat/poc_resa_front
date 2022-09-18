<template>
  <div class="uk-margin-large-top" >
    <div>
      <div style="text-align:center">
        <router-link to="/choosedepartment" ><a class="uk-button uk-button-default"><img alt="Vue logo" src="../assets/favicon.png" class="uk-width-small">Réserver un bureau</a></router-link>
      </div>
    </div>

    <div >
      <hr class="uk-divider-icon"/>
    </div>
   
    
    <div style="text-align:center">
      <router-link to="/searchpeople" ><a class="uk-button uk-button-default"><img alt="Vue logo" src="../assets/favicon.png" class="uk-width-small"> Trouver quelqu'un</a></router-link>
    </div>

    <!--<DevRoom/> -->

   
  </div>
</template>

<script>
//import DevRoom from "../components/DevRoom.vue";

export default {
  name: 'HomeView',
  components: {
    //DevRoom
},
  mounted() {
  }
}
</script>
<style scoped>
.uk-button-default{
  background-color: transparent;
  color: #222;
  border:null !important
}
</style>
