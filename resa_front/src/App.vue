<template>
  <Nav v-if="!myNavLogin"/>
  <NavLogin v-else/>
  <router-view/>
</template>

<script>
  import UIkit from 'uikit';
  import Icons from 'uikit/dist/js/uikit-icons';
  import Nav from './components/Nav.vue';
  import NavLogin from './components/NavLogin.vue';
  import { getCookie } from "./utils/cookies";
  UIkit.use(Icons);
  export default {
    name: "App",
    components: { Nav, NavLogin },
    data() {
      return {
        myNavLogin: false,
      };
    },
    created(){
      const token = getCookie('token');
      console.log({token})
      if (token) {
        this.myNavLogin = true;
      }
    }
  };
</script>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
  @import "./assets/less/theme.less";
</style>
