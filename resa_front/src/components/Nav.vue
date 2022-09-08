<template>
<nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-left">

        <router-link to="/"><a class="uk-navbar-item uk-logo" href="#"><img alt="Vue logo" class="uk-width-small uk-margin-medium-left" src="../assets/images/logo_yooz.png"></a></router-link>

        

        <ul class="uk-navbar-nav">
            <li>
                <a href="#">
                    <span class="uk-icon uk-margin-small-right uk-margin-large-left" uk-icon="icon: thumbnails"></span>
                    Réserver un bureau
                </a>
            </li>
        </ul>

        <div class="uk-navbar-item">
            <form action="javascript:void(0)">
                <input class="uk-input uk-form-width-small uk-margin-large-left" type="text" placeholder="Trigrame">
                <button class="uk-button uk-button-default">Trouver quelqu'un</button>
            </form>
            <router-link to="/credentials" class="uk-align-right uk-margin-large-left"><button class="uk-button uk-button-default">Login me</button></router-link>
        </div>

    </div>
</nav>
</template>


<script>
    export default {
      name: 'NavBar',
    };
</script>
