<template>
    <div>
      
      <Nav />

      <div class="uk-grid-collapse uk-child-width-expand@s" uk-grid>
          <div>
              <div class="uk-card">
                <img alt="Vue logo" class="" src="https://2205679.fs1.hubspotusercontent-na1.net/hubfs/2205679/nousrejoindre-FR.jpg">
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                <form  class="uk-align-center uk-margin-medium uk-padding-medium">
                  <legend class="uk-legend">Connexion : </legend>

                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Email">
                    </div>

                    <div class="uk-margin">
                        <input class="uk-input" type="password" placeholder="Mot de passe">
                    </div>

                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label><input class="uk-checkbox" type="checkbox" checked> Rester connecter ? </label>
                    </div>

                    <button class="uk-button uk-button-default">Me connecter</button>

                </form>
              </div>
          </div>


      </div>


  
    </div>
</template>

<script>
import { login } from "../utils/users/login";
import {getCookie, setCookie } from "../utils/cookies";
import Nav from '@/components/Nav.vue';

export default {
  name: "Credentials-view",
  data() {
    return {
      state: 0,
      name: "",
      mail: "",
      password: "",
      sent: false,
      processing: false,
    };
  },
  components: {
    Nav
  },
  beforeCreate() {
    document.title = 'Yooz - login'
    if (getCookie("token")) {
      this.$router.push("/dashboard");
    }
  },
  computed: {
    isEmailValid() {
      return this.mail.trim().length > 5 ;
    },
    colorEmail() {
      if (this.mail.length === 0) {
        return "";
      } else if (this.isEmailValid) {
        return "uk-form-success";
      } else {
        return "uk-form-danger";
      }
    },
    isPasswordValid() {
      return this.password.length > 4;
    },
    colorPassword: function() {
      if (this.password.length === 0) {
        return "";
      } else if (this.isPasswordValid) {
        return "uk-form-success";
      } else {
        return "uk-form-danger";
      }
    },
    isNameValid() {
      return this.name.length > 2;
    },
    colorName() {
      if (this.name.length === 0) {
        return "";
      } else if (this.isNameValid) {
        return "uk-form-success";
      } else {
        return "uk-form-danger";
      }
    },
  },

  methods: {
    loginMe(e) {
      e.preventDefault();
      if (this.isEmailValid && this.isPasswordValid) {
        this.processing = true;
        login(this.mail.trim(), this.password)
          .then((res) => {
            setCookie("token", res.data.token, 99999999999999999);
            this.$router.push("/dashboard");
          })
          .catch((err) => {
            this.password = "";
            if (err.response) {
              //UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Mauvais email ou mot de passe ❌</p>");
            } else {
              //UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Pas de connexion internet ❌</p>");
            }
          })
          .finally(() => {
            this.processing = false;
          });
      } else {
        //UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Champs non valides ❌</p>");
      }
    }
  }
}


</script>
