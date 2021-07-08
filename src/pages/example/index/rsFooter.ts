import { Component, Vue } from 'vue-property-decorator'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'
import RsFooter from '@/components/rs-footer/rs-footer.vue'
import themeStyle from '@/components/rscss/colors.scss'

@Component({ components: { RsSectionSelector, RsFooter } })
export default class index extends Vue {
  loadingStyle: string = 'loading'
  themeColor: string = themeStyle.primary
  countChange(index) {
    if (index === 0) {
      this.loadingStyle = 'loading'
    }
    if (index === 1) {
      this.loadingStyle = 'spinner'
    }
  }
  countChange2(index) {
    if (index === 0) {
      this.themeColor = 'red'
    }
    if (index === 1) {
      this.themeColor = 'blue'
    }
  }
}
