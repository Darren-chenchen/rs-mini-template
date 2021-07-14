import { Component, Vue } from 'vue-property-decorator'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'
import RsPopup from '@/components/rs-popup/rs-popup.vue'

@Component({ components: { RsSectionSelector, RsPopup } })
export default class index extends Vue {
  changeIndex: number = 0
  $refs: any

  mounted() {
    this.$refs.filter1.show()
  }
  change1(index) {
    this.changeIndex = index
    if (index === 0) {
      this.$refs.filter1.show()
    }
    if (index === 1) {
      this.$refs.filter2.show()
    }
    if (index === 2) {
      this.$refs.filter3.show()
    }
    if (index === 3) {
      this.$refs.filter4.show()
    }
  }
}
