<template>
  <div id="emp1">
    <vue-confirm-dialog></vue-confirm-dialog>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12 col-12">
          <div class="images">
            <img
              src="images/Vue.js_Logo_2.svg.png"
              alt="img-logo"
              class="img-fluid"
            />
          </div>
          <div class="block-manage">
            <h2>Hello User</h2>
            <div class="loc-addnew">
              <button type="button" class="btn btn-primary" @click="clickAdd()">
                Add New
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <input
            v-model="filterProduct"
            class="form-control"
            type="text"
            id="myInput"
            placeholder="Search ..."
            style="margin-bottom: 10px"
          />
        </div>
        <div class="col-md-5">
          <p class="select">{{ select }}</p>
          <select v-model="pageSizeModel">
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
      <div class="employee-list">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" class="bg" @click="sort('id')">ID</th>
              <th scope="col" class="bg" @click="sort('name')">Name</th>
              <th scope="col" class="bg" @click="sort('gmail')">Email</th>
              <th scope="col" class="bg" @click="sort('phone')">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in paginate" :key="index">
              <td class="id" scope="row">{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.gmail }}</td>
              <td>{{ product.phone }}</td>
            </tr>
          </tbody>
        </table>
        <ul class="ul">
          <li
            class="li"
            v-for="pageNumber in totalPages"
            v-bind:key="pageNumber"
          >
            <!-- v-if="
              Math.abs(pageNumber - currentPage) < 3 ||
              pageNumber == totalPages ||
              pageNumber == 1
            " -->
            <a
              v-bind:key="pageNumber"
              href="#"
              @click="setPage(pageNumber)"
              :class="{
                current: currentPage === pageNumber,
                last:
                  pageNumber == totalPages &&
                  Math.abs(pageNumber - currentPage) > 3,
                first:
                  pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3,
              }"
              >{{ pageNumber }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <edit-employee
        :employee="employee"
        @save="clickSave"
        @nosave="clickThoat"
        v-if="isEdit"
      ></edit-employee>
    </div>
  </div>
</template>

<script>
import EditEmployee from "./EditEmployee";
import "../scss/style.scss"
export default {
  name: "emp",
  data() {
    return {
      filterProduct: "",
      select: "Sắp xếp theo số trang: ",
      employeeList: [
        {
          id: 1,
          name: "Công Ảo",
          gmail: "lecongao.it@gmail.com",
          phone: "123456",
        },
        {
          id: 2,
          name: "Nguyễn Trần Bổn",
          gmail: "tranbong@gmail.com",
          phone: "123455",
        },
        {
          id: 3,
          name: "Nguyễn Ngọc Trường",
          gmail: "Ngoctruong@gmail.com",
          phone: "123454",
        },
        {
          id: 4,
          name: "Ngọc Trường",
          gmail: "truong@gmail.com",
          phone: "123454",
        },
        {
          id: 5,
          name: "Nguyễn Trường",
          gmail: "Ngoc@gmail.com",
          phone: "123454",
        },
        {
          id: 6,
          name: "Trường",
          gmail: "Ngoctruong@gmail.com",
          phone: "123454",
        },
        {
          id: 7,
          name: "Nguyễn",
          gmail: "Ngoctruong@gmail.com",
          phone: "123454",
        },
        {
          id: 8,
          name: "Công Ảo",
          gmail: "lecongao.it@gmail.com",
          phone: "123456",
        },
        {
          id: 9,
          name: "Ảo",
          gmail: "ao.it@gmail.com",
          phone: "123456",
        },
        {
          id: 10,
          name: "Ảo Công",
          gmail: "aocong.it@gmail.com",
          phone: "123456",
        },
        {
          id: 11,
          name: "Bổn Trần",
          gmail: "Bontran.it@gmail.com",
          phone: "123456",
        },
        {
          id: 12,
          name: "Lê Ảo",
          gmail: "leao.it@gmail.com",
          phone: "123456",
        },
      ],
      employee: null,
      isEdit: false,
      searchKey: "",
      currentPage: 1,
      itemsPerPage: 5,
      resultCount: 1,
      currentSort: "name",
      currentSortDir: "asc",
    };
  },
  components: {
    "edit-employee": EditEmployee,
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    },
  },
  methods: {
    clickAdd() {
      let employee = {
        id: Math.floor(Math.random() * 10000),
        name: "",
        gmail: "",
        phone: "",
      };
      this.employee = employee;
      this.isEdit = true;
    },
    clickSave(employee) {
      let index = this.employeeList.findIndex((item) => item.id == employee.id);
      if (index >= 0) {
        this.employeeList.splice(index, 1, employee);
      } else {
        this.employeeList.push(employee);
      }
      this.isEdit = false;
    },
    clickThoat(employee) {
      let index = this.employeeList.findIndex((item) => item.id == employee.id);
      this.isEdit = false;
    },
    setPage: function (pageNumber) {
      this.currentPage = pageNumber;
    },
    sort: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
  },
  computed: {
    totalPages: function () {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
    // Sửa bên tìm kiếm chổ này nề
    filterProducts: function () {
      let seft = this;
      return this.employeeList.filter(function (product) {
        return (
          (product.id + product.gmail + product.name)
            .toLowerCase()
            .indexOf(seft.filterProduct.toLowerCase()) >= 0
        );
      });
    },
    paginate: function () {
      if (
        !this.filterProducts ||
        this.filterProducts.length != this.filterProducts.length
      ) {
        return;
      }
      this.resultCount = this.filterProducts.length;
      console.log("demo 1:", this.resultCount);
      console.log("demo 2:", this.totalPages);

      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.filterProducts
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        })
        .slice(index, index + this.itemsPerPage);
    },
    pageSizeModel: {
      get() {
        return this.itemsPerPage;
      },
      set(v) {
        this.itemsPerPage = v;
        this.page = 0;
      },
    },
  },
};
</script>

<style lang="scss">

</style>
