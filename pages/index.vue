<template>
  <section>
    <div>
      <h1>
        inventory-tracker
      </h1>
      <div v-if="!isAuthChecked">
        Checking logged in status...
      </div>
      <div v-if="!isLoggedIn && isAuthChecked">
        <button
          @click="login"
          class="btn btn-dark">Login</button>
        <button
          @click="signup"
          class="btn btn-dark">Signup</button>
      </div>
      <div v-if="isLoggedIn">
        <button
          class="btn btn-dark"
          @click="logout"
        >Log out</button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isLoggedIn: false,
      isAuthChecked: false
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
        username: 'evan',
        email: '1234',
        password: '1234'
      }).then((data) => {
        if (data === true) {
          this.isLoggedIn = true;
        }
      });
    },
    login() {
      this.$axios.$post('/auth/login', {
        username: 'evan',
        password: '1234'
      }).then((data) => {
        if (data === true) {
          this.isLoggedIn = true;
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
