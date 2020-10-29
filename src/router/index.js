import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login"
import employeeComponent from "../views/employee"
import user from "../views/user"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [

        {
            path: "/",
            redirect: {
                name: "login",
                component: LoginComponent
            }

        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/employee",
            name: "employee",
            component: employeeComponent
        },
        {
            path: "/user",
            name: "user",
            component: user
        }
    ]
})