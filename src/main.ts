import Vue from 'vue'
import App from './App.vue'
import initToast from '@/components/rs-toast/init.js'
import initLoading from '@/components/rs-loading/init.js'
import HDButton from '@/components/rs-button/rs-button.vue'
initToast(Vue)
initLoading(Vue)

Vue.component('rs-button', HDButton)

Vue.config.productionTip = false

new App().$mount()
