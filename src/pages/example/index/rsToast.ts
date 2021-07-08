import { Component, Vue } from 'vue-property-decorator'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'

@Component({ components: { RsSectionSelector } })
export default class index extends Vue {
  changeIndex: number = 0
  $showToast: any
  mounted() {
    this.change1(0)
  }
  change1(index) {
    this.changeIndex = index
    if (index === 0) {
      this.$showToast({ icon: 'success', title: '这里是内容这里是内容这里是内容这里是内容', image: null })
    }
    if (index === 1) {
      this.$showToast({ icon: 'error', title: '这里是内容', image: null })
    }
    if (index === 2) {
      this.$showToast({ icon: 'warning', title: '这里是内容', image: null })
    }
  }
}
