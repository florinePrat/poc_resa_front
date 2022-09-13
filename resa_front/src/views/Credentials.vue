<template>
    <div>



      


      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->


    
      <div class="uk-grid-collapse uk-child-width-expand@s" uk-grid>
          <div>
              <div class="uk-card">
                <img alt="Vue logo" class="" src="https://2205679.fs1.hubspotusercontent-na1.net/hubfs/2205679/nousrejoindre-FR.jpg">
              </div>
          </div>
          <div>
            <div class="uk-flex -fullheight unselectable uk-margin-large-top">
              <div class="uk-width-expand uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-position-relative">
                <div v-if="state === 0">
                  <h1 class="-title uk-text-center">Connexion</h1>
                  <form class="uk-margin uk-form-stacked uk-flex uk-flex-column uk-flex-middle">
                    <div class="uk-margin-small">
                      <label class="uk-form-label" for="form-stacked-text">Email</label>
                      <div class="uk-inline uk-width-medium">
                        <span class="uk-form-icon" uk-icon="icon: mail" />
                        <input :class="'uk-input uk-form ' + colorEmail" type="text" placeholder="prenom.nom@getyooz.com" v-model="mail" />
                      </div>
                    </div>
                    <div class="uk-margin-small">
                      <label class="uk-form-label" for="form-stacked-text">Mot de passe</label>
                      <div class="uk-inline uk-width-medium">
                        <span class="uk-form-icon" uk-icon="icon: lock" />
                        <input :class="'uk-input uk-form ' + colorPassword" type="password" placeholder="*********" v-model="password" />
                      </div>
                      <br />
                      <a class="uk-align-right uk-text-small uk-margin-remove" style="margin-top:10px !important;" ref="#forgot-password" @click="state = 2">Mot de passe oublié</a>
                      <div class="uk-margin-small-top"><label><input class="uk-checkbox uk-margin-small-right" type="checkbox" checked> Rester connecter ? </label></div>
                    </div>
                    <div class="uk-margin-top uk-flex-inline uk-flex uk-flex-row-reverse">
                      <button type="submit" class="uk-button" @click="loginMe" :disabled="!isEmailValid || !isPasswordValid || processing">
                        Connexion
                      </button>
                    </div>
                  </form>
                  <p class="uk-text-center uk-text-small">
                    <span class="uk-text-meta">Je n'ai pas de compte, </span>
                    <a @click="state = 1">je veux m'inscrire</a>
                  </p>
                </div>
                <div v-else-if="state === 1">
                  <h1 class="-title uk-text-center">Inscription</h1>
                  <form class="uk-margin uk-form-stacked uk-flex uk-flex-column uk-flex-middle">
                    <div class="uk-margin-small">
                      <label class="uk-form-label" for="form-stacked-text">Trigramme</label>
                      <div class="uk-inline uk-width-medium">
                        <span class="uk-form-icon" uk-icon="icon: user" />
                        <input :class="'uk-input uk-form ' + colorName" type="text" placeholder="XXX" v-model="name" />
                      </div>
                    </div>
                    <div class="uk-margin-small">
                      <label class="uk-form-label" for="form-stacked-text">Email</label>
                      <div class="uk-inline uk-width-medium">
                        <span class="uk-form-icon" uk-icon="icon: mail" />
                        <input :class="'uk-input uk-form ' + colorEmail" type="text" placeholder="prenom.nom@getyooz.com" v-model="mail" />
                      </div>
                    </div>
                    <div class="uk-margin-small">
                      <label class="uk-form-label" for="form-stacked-text">Mot de passe</label>
                      <div class="uk-inline uk-width-medium">
                        <span class="uk-form-icon" uk-icon="icon: lock" />
                        <input :class="'uk-input uk-form ' + colorPassword" type="password" placeholder="*********" v-model="password" />
                      </div>
                    </div>
                    <div class="uk-margin-medium-top uk-flex-inline uk-flex uk-flex-row-reverse">
                      <button class="uk-button" @click="signup" type="submit" :disabled="!isEmailValid || !isPasswordValid || !isNameValid || processing">
                        M'inscrire
                      </button>
                    </div>
                  </form>
                  <p class="uk-text-center uk-text-small">
                    <span class="uk-text-meta">J'ai déja un compte, </span>
                    <a @click="state = 0">je veux me connecter</a>
                  </p>
                </div>
                <div v-else>
                  <h1 class="-title uk-text-center" v-if="!sent">Récupération<br />mot de passe</h1>
                  <h1 class="-title uk-text-center" v-else>Mail<br />envoyé</h1>
                  <form class="uk-margin-top uk-form-stacked uk-flex uk-flex-column uk-flex-middle">
                    <div class="uk-margin-small" v-if="!sent">
                      <label class="uk-form-label" for="form-stacked-text">Email</label>
                      <div class="uk-inline uk-width-medium">
                        <span class="uk-form-icon" uk-icon="icon: mail" />
                        <input :class="'uk-input uk-form ' + colorEmail" type="text" placeholder="prenom.nom@getyooz.com" v-model="mail" />
                      </div>
                    </div>
                    <div class="uk-margin-medium-top uk-flex-inline uk-flex uk-flex-row-reverse" v-if="!sent">
                      <button class="uk-button" @click="forgot()" type="submit" :disabled="!isEmailValid || processing">
                        Envoyer lien
                      </button>
                      <button class="uk-button" @click="state = 0" style="margin-right:20px;">
                        Retour
                      </button>
                    </div>
                    <div class="uk-margin-medium-top uk-text-center" v-else>
                      <button class="uk-button" @click="state = 0">
                        Retour
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


      </div>


  
    </div>
</template>

<script>
import UIkit from 'uikit';
import { login } from "../utils/users/login";
import { signup } from "../utils/users/signup";
import { forgetPassword } from "../utils/users/forgotPassword";
import {getCookie, setCookie } from "../utils/cookies";

export default {
  name: "Credentials-view",
  data() {
    return {
      state: 0,
      name: "",
      mail: "",
      password: "",
      sent: false,
    };
  },
  components: {
  },
  beforeCreate() {
    if (getCookie("token")) {
      this.$router.push("/");
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
      return this.name.length == 3;
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
    loginMe()  {
      console.log("login method called")
      console.log(this.mail, this.password)
      login(this.mail.trim(), this.password)
        .then((res) => {
          setCookie("token", res.data.token, 99999999999999999);
        })
        .catch((err) => {
          this.password = "";
          if (err.response) {
            UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Mauvais email ou mot de passe ❌</p>");
          } else {
            UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Pas de connexion internet ❌</p>");
          }
        })
    },

    signup() {
      if (this.isNameValid && this.isEmailValid && this.isPasswordValid) {
        signup(this.mail.trim(), this.name.trim(), this.password)
          .then((res) => {
            setCookie("token", res.data.token, 99999999999999999);
            this.$router.push("/");
          })
          .catch((err) => {
            this.password = "";
            if (err.response) {
              UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Impossible de créer le compte ❌</p>");
            } else {
              UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Pas de connexion internet ❌</p>");
            }
          })
      } else {
        UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Champs non valides ❌</p>");
      }
    },

    forgot() {
      if (this.isEmailValid) {
        const email = this.mail;
        this.mail = "";
        forgetPassword(email)
          .then(() => {
            UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Nous venons de vous envoyer un mail avec des instructions ✔️</p>");
            this.sent = true;
          })
          .catch((err) => {
            if (err.response) {
              UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Nous ne trouvons pas ton adresse dans notre base de donnée ❌</p>");
              this.state = 0;
            } else {
              UIkit.modal.dialog("<p class='uk-modal-body uk-text-center'>Pas de connexion internet ❌</p>");
            }
          })
      }
    },

  }
}


</script>
