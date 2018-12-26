<template>
  <section>
    <div>
      <h1>Augur's Lore</h1>
      <h2>Inventory Tracker</h2>
      <h3>Username {{ username }}</h3>
      <!-- test of existin characters -->
      <h4
        v-if="characters.length"
        v-for="character of characters"
        :key="character.id">
        {{ character.name }}
      </h4>
      <div v-if="!isAuthChecked">
        Checking logged in status...
      </div>
      <div v-if="!isLoggedIn && isAuthChecked">
        <button
          class="btn btn-dark"
          data-toggle="modal"
          data-target="#loginModal"
          >Login</button>
        <button
          class="btn btn-dark"
          data-toggle="modal"
          data-target="#signupModal"
          >Signup</button>
      </div>
      <div v-if="isLoggedIn">
        <button
          class="btn btn-dark"
          @click="logout"
        >Log out</button>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="signupModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signupModalLabel">Signup</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="username"
                  v-model="signupData.username"
                  >
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  v-model="signupData.email"
                >
              </div>
              <div class="form-group">
                <label for="signup-password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="signup-password"
                  v-model="signupData.password">
              </div>
              <div class="form-group">
                <label for="password-confirm">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password-confirm"
                  v-model="signupData.passwordConfirm"
                >
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                id="signup-cancel"
              >Cancel</button>
              <button @click="signup" type="button" class="btn btn-primary">Signup</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="usernameOrEmail">Username or Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="usernameOrEmail"
                  placeholder="username or email"
                  v-model="loginData.usernameOrEmail"
                  >
              </div>
              <div class="form-group">
                <label for="passwordLogin">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="passwordLogin"
                  v-model="loginData.password"
                >
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                id="login-cancel"
              >Cancel</button>
              <button @click="login" type="button" class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: mapState([
    'username',
    'characters'
  ]),
  data() {
    return {
      isLoggedIn: false,
      isAuthChecked: false,
      signupData: {
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      loginData: {
        usernameOrEmail: '',
        password: ''
      }
    };
  },
  mounted() {
    this.$axios.$get('/auth/test')
    .then((data) => {
      this.isLoggedIn = data;
      this.isAuthChecked = true;
    });
  },
  methods: {
    signup() {
      this.$axios.$post('/auth/signup', {
        username: this.signupData.username,
        email: this.signupData.email,
        password: this.signupData.password
      }).then((data) => {
        if (data) {
          console.log(data);
          this.isLoggedIn = true;
          document.getElementById('signup-cancel').click();
        }
      });
    },
    login() {
      this.$axios.$post('/auth/login', {
        username: this.loginData.usernameOrEmail,
        password: this.loginData.password
      }).then((data) => {
        if (data) {
          this.$store.commit('setUsernameAndCharacters', data);
          this.isLoggedIn = true;
          document.getElementById('login-cancel').click();
          console.log('characters in state', this.characters);
          console.log('username', this.username);
        };
      });
    },
    logout() {
      this.$axios.$post('/auth/logout')
      .then((data) => {
        this.isLoggedIn = false;
      })
    }
  }
}
</script>

<style>

</style>
