import { Component, Vue } from 'vue-property-decorator'
import RsCodeBtn from '@/components/rs-code-btn/rs-code-btn.vue'

@Component({ components: { RsCodeBtn } })
export default class index extends Vue {
  second: number = 0
  mounted() {}
  doBtn() {
    uni.navigateTo({ url: '/pages/example/index/rsButton' })
  }
  doCell() {
    uni.navigateTo({ url: '/pages/example/index/rsCell' })
  }
  doInput() {
    uni.navigateTo({ url: '/pages/example/index/rsInput' })
  }
  doSearchBar() {
    uni.navigateTo({ url: '/pages/example/index/rsSearchBar' })
  }
  doNumberStep() {
    uni.navigateTo({ url: '/pages/example/index/rsNumberStep' })
  }
  doBanner() {
    uni.navigateTo({ url: '/pages/example/index/rsBanner' })
  }
  doGrid() {
    uni.navigateTo({ url: '/pages/example/index/rsGrid' })
  }
  doBadge() {
    uni.navigateTo({ url: '/pages/example/index/rsBadge' })
  }
  doCodebtn() {
    this.second = 60
  }
  doCustomNav() {
    uni.navigateTo({ url: '/pages/example/index/rsCustomNav' })
  }
  onClick() {
    console.log('获取验证码')
  }
  doCountDown() {
    uni.navigateTo({ url: '/pages/example/index/rsCountDown' })
  }
  doNotic() {
    uni.navigateTo({ url: '/pages/example/index/rsNotic' })
  }
  doSectionSelect() {
    uni.navigateTo({ url: '/pages/example/index/rsSectionSelect' })
  }
  doToast() {
    uni.navigateTo({ url: '/pages/example/index/rsToast' })
  }
  doModal() {
    uni.navigateTo({ url: '/pages/example/index/rsModal' })
  }
  doLoading() {
    uni.navigateTo({ url: '/pages/example/index/rsLoading' })
  }
  doSwipeDelete() {
    uni.navigateTo({ url: '/pages/example/index/rsSwipeDelete' })
  }
  doEmpty() {
    uni.navigateTo({ url: '/pages/example/index/rsEmpty' })
  }
  doFooter() {
    uni.navigateTo({ url: '/pages/example/index/rsFooter' })
  }
  doPwd() {
    uni.navigateTo({ url: '/pages/example/index/rsPwd' })
  }
  doPop() {
    uni.navigateTo({ url: '/pages/example/index/rsPop' })
  }
  doTabbar() {
    uni.navigateTo({ url: '/pages/example/index/rsTabbar' })
  }
  doScroll() {
    uni.navigateTo({ url: '/pages/example/index/rsScrollView' })
  }
  doChartLine() {
    uni.navigateTo({ url: '/pagesChart/pages/example/line/line' })
  }
  doChartPie() {
    uni.navigateTo({ url: '/pagesChart/pages/example/pie/pie' })
  }
  doChartColumn() {
    uni.navigateTo({ url: '/pagesChart/pages/example/column/column' })
  }
}
