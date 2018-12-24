<template>
  <section>
    <div>
      <h1>Augur's Lore</h1>
      <h2>Inventory Tracker</h2>
      <div v-if="!isAuthChecked">
        Checking logged in status...
      </div>
      <div v-if="!isLoggedIn && isAuthChecked">
        <button
          @click="login"
          class="btn btn-dark"
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
      <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
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
                  v-model="username"
                >
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  v-model="email"
                >
              </div>
              <div class="form-group">
                <label for="signup-password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="signup-password"
                  v-model="password"
                >
              </div>
              <div class="form-group">
                <label for="password-confirm">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password-confirm"
                  v-model="passwordConfirm"
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
              <button
                @click="signup"
                type="button"
                class="btn btn-primary"
              >Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isLoggedIn: false,
      isAuthChecked: false,
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
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
        username: this.username,
        email: this.email,
        password: this.password
      }).then((data) => {
        if (data === true) {
          this.isLoggedIn = true;
          document.getElementById('signup-cancel').click();
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
