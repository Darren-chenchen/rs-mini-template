import { Component, Vue } from 'vue-property-decorator'
@Component({ components: {} })
export default class index extends Vue {
  $showModal: any
  doShowSuccess() {
    this.$showModal({
      title: '提示',
      content: '确认退出当前账户吗？',
      cancelText: '取消',
      showCancel: true,
      confirmText: '退出',
      success: res => {
        if (res.confirm) {
        }
      }
    })
  }
  doShowSuccess2() {
    this.$showModal({
      title: '提示',
      content: '确认退出当前账户吗？',
      cancelText: '取消',
      showCancel: false,
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
        }
      }
    })
  }
  doShowSuccess3() {
    this.$showModal({
      title: '提示',
      content: '您暂无权限，请联系管理员',
      showExitBtn: true,
      success: res => {
        if (res.confirm) {
        }
      }
    })
  }
}
