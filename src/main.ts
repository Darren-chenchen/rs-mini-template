import Vue from 'vue'
import App from './App.vue'
import initToast from '@/components/rs-toast/init.js'
import initLoading from '@/components/rs-loading/init.js'
import initModal from '@/components/rs-modal/init.js'
import RSButton from '@/components/rs-button/rs-button.vue'
import RSCell from '@/components/rs-cell/rs-cell.vue'
import RsModal from '@/components/rs-modal/rs-modal.vue'
import RsEmpty from '@/components/rs-empty/rs-empty.vue'

initToast(Vue)
initLoading(Vue)
initModal(Vue)

Vue.component('rs-button', RSButton)
Vue.component('rs-cell', RSCell)
Vue.component('rs-modal', RsModal)
Vue.component('rs-empty', RsEmpty)

Vue.config.productionTip = false

new App().$mount()
