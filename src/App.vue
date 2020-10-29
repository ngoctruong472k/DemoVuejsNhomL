<template>
  <div id="app">
    <div id="nav" class="logout">
      <router-link
        class="out"
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout()"
        replace
        >Log out</router-link
      >
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import "./scss/style.scss";
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "truong",
        password: "123",
      },
      mockAccountUserUser: {
        username: "ao",
        password: "123",
      },
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style lang="scss">
$background: #f0f0f0;
body {
  background-color: $background;
}


</style>