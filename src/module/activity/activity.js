import Vue from 'vue'
import activity from './activity.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from '../../stare/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    store,
    render: h => h(activity)
}).$mount('#activity')