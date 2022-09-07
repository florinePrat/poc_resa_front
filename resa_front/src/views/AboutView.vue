<template>
  <div  class="uk-align-center uk-margin-medium uk-padding-medium uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <form  class="uk-align-center uk-margin-medium uk-padding-medium">
    <fieldset class="uk-fieldset">

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



    </fieldset>
</form>
</div>

</template>

<script>
  import { login } from "../utils/users/login";
  import {getCookie, setCookie } from "../utils/cookies";

export default {
  name: "AboutView",
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
  beforeCreate() {
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
