import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit,faTrash,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueConfirmDialog from 'vue-confirm-dialog'
import Router from './router/index'
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
library.add(faEdit,faTrash,faSignOutAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
new Vue({
router: Router,
render: h => h(App),
}).$mount('#app');


