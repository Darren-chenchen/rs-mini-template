import { Component, Vue } from 'vue-property-decorator'
import RsPasswordAlert from '@/components/rs-password-alert/rs-password-alert.vue'

@Component({ components: { RsPasswordAlert } })
export default class index extends Vue {
  showPwd: boolean = false
  closePwd() {
    this.showPwd = false
  }
  clickBtn() {
    this.showPwd = true
  }
  inputComplete(e) {
    console.log(e)
  }
  gotoResetPwd() {}
}
