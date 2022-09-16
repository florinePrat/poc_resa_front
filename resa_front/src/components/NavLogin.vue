<template>
<nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-left">

        <router-link to="/"><a class="uk-navbar-item uk-logo" href="#"><img alt="Vue logo" class="uk-width-small uk-margin-medium-left" src="../assets/images/logo_yooz.png"></a></router-link>

        

        <ul class="uk-navbar-nav">
            <li>
                <router-link to="/choosedepartment" >
                    <span class="uk-icon uk-margin-small-right uk-margin-large-left" uk-icon="icon: thumbnails"></span>
                    Réserver un bureau
                </router-link>
            </li>
        </ul>

        <div class="uk-navbar-item">
            <form class="uk-search uk-search-default">
                <a href="" class="uk-search-icon-flip" uk-search-icon></a>
                <input class="uk-search-input" type="search" placeholder="Trigramme">
            </form>
        </div>

    </div>

    <div class="uk-navbar-right">

        <ul class="uk-navbar-nav">
            <li>
                <button @click="logout()" class="uk-button uk-button-default uk-margin-medium-right">Déconnexion</button>
            </li>
        </ul>

    </div>

</nav>
</template>


<script>
import {eraseCookie } from "../utils/cookies";
export default {
    name: 'NavBarLogin',

    methods:{
    logout() {
        localStorage.clear();
        eraseCookie("token");
        this.$store.state.connected = false;
        console.log(this.$store.getters.doneConnected)
        this.$router.push("/credentials");
    }
    }

};
    
</script>
