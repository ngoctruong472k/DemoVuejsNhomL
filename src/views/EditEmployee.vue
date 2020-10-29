<template>
  <div class="bg-add">
    <div class="add">
      <div class="frf">
        <div class="cancle">
          <span></span>
          <span></span>
        </div>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="nameInput"
              v-model="employee.name"
              placeholder="Name:"
            />
          </div>
          <div class="form-group">
            <!-- <label for="gmailInput">Email</label> -->
            <input
              type="text"
              class="form-control"
              id="gmailInput"
              v-model="employee.gmail"
              placeholder="Email:"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              pattern=""
              id="phoneInput"
              v-model="employee.phone"
              placeholder="Phone:"
            />
          </div>
          <div class="btn btn-primary" @click="clickSave()">save</div>
          <div class="btn btn-primary" id="close" @click="clickThoat()">
            Close
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import "../scss/style.scss";
export default {
  name: "EditEmployee",
  props: {
    employee: Object,
  },
  methods: {
    clickSave() {
      this.$emit("save", this.employee);
    },
    clickThoat() {
      this.$emit("nosave", this.employee);
    },
  },
};
</script>
