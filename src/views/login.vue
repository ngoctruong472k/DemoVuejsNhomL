<template>
  <div id="login" class="login">
    <img src="images/user.png" alt="img-logo" class="img-fluid" />
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="username"
          v-model="input.username"
          required
          placeholder="Username"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          name="password"
          required
          v-model="input.password"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="login()">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "employee" });
        } else if (
          this.input.username == this.$parent.mockAccountUserUser.username &&
          this.input.password == this.$parent.mockAccountUserUser.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "user" });
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style lang="scss">


</style>