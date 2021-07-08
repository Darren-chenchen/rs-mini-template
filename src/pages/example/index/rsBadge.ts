import { Component, Vue } from 'vue-property-decorator'
import RsBadge from '@/components/rs-badge/rs-badge.vue'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'

@Component({ components: { RsBadge, RsSectionSelector } })
export default class index extends Vue {
  count: number = 8
  dot: boolean = false
  isDot: boolean = false
  theme: string = '#DD524D'

  countChange(index) {
    this.count = index === 0 ? 0 : index === 1 ? 8 : index === 2 ? 15 : index === 3 ? 106 : 209
  }
  typeChange(index) {
    this.dot = !index
  }
  isThemeChange(index) {
    this.theme = index === 0 ? '#DD524D' : '#0065FF'
  }
}
