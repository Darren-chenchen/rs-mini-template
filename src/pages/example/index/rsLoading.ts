import { Component, Vue } from 'vue-property-decorator'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'

@Component({ components: { RsSectionSelector } })
export default class index extends Vue {
  $showLoading: any
  $hideLoading: any

  mounted() {
    this.doShowLoading()
  }

  doShowLoading() {
    /// 默认
    this.$showLoading()
    setTimeout(() => {
      this.$hideLoading()
    }, 3000)
  }
  countChange(index) {
    if (index === 0) {
      this.$showLoading({ title: '加载中...', image: null })
      setTimeout(() => {
        this.$hideLoading()
      }, 3000)
    }
    if (index === 1) {
      this.$showLoading({ title: null, image: null })
      setTimeout(() => {
        this.$hideLoading()
      }, 3000)
    }
    if (index === 2) {
      this.$showLoading({ title: '加载中...', image: require('static/example/yy.svg') })
      setTimeout(() => {
        this.$hideLoading()
      }, 3000)
    }
  }
}
