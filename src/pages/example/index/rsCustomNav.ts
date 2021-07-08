import { Component, Vue } from 'vue-property-decorator'
import RsNavbar from '@/components/rs-navbar/rs-navbar.vue'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'

@Component({ components: { RsNavbar, RsSectionSelector } })
export default class index extends Vue {
  backText: string = '返回'
  titleText: string = '标题'
  showLeft: boolean = true
  backIconClass: string = 'rsIcon-arrow-left'
  theme: string = '#fff'
  bgImage: string = ''
  bg: string = ''

  titleChange(index) {
    if (index === 0) {
      this.titleText = '标题'
    }
    if (index === 1) {
      this.titleText = '自定义标题'
    }
    if (index === 2) {
      this.titleText = '标题文字多余的省略省略'
    }
  }
  leftAreaChange(index) {
    if (index === 0) {
      this.showLeft = false
    }
    if (index === 1) {
      this.showLeft = true
    }
  }
  leftChange(index) {
    if (index === 0) {
      this.backText = '自定义'
    }
    if (index === 1) {
      this.backText = '返回'
    }
  }
  themeChange(index) {
    if (index === 0) {
      this.theme = '#fff'
      this.bg = ''
      this.bgImage = ''
    }
    if (index === 1) {
      this.theme = '#0065FF'
      this.bg = ''
      this.bgImage = ''
    }
    if (index === 2) {
      this.theme = ''
      this.bgImage = ''
      this.bg = 'linear-gradient(147deg, #FF7979 0%, #FC2C4A 100%)'
    }
    if (index === 3) {
      this.theme = ''
      this.bg = ''
      this.bgImage = require('static/example/nav-bg.png')
    }
  }
}
