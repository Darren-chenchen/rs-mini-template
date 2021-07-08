import { Component, Vue } from 'vue-property-decorator'
import RsCountdown from '@/components/rs-countdown/rs-countdown.vue'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'
@Component({ components: { RsCountdown, RsSectionSelector } })
export default class index extends Vue {
  showday: boolean = true
  second: number = 3600 * 60
  showColon: boolean = false
  themeList: string[] = ['#000', '#007AFF', '#1CBBB4']
  timebackgroundColor: string = '#000'
  splitorColor: string = '#000'
  countChange(index) {
    if (index === 0) {
      this.showday = true
      this.showColon = false
    }
    if (index === 1) {
      this.showday = false
      this.showColon = true
    }
    if (index === 2) {
      this.showday = false
      this.showColon = false
    }
  }
  countChange2(index) {
    this.timebackgroundColor = this.themeList[index]
  }
  countChange3(index) {
    this.splitorColor = this.themeList[index]
  }
  timeend() {}
}
