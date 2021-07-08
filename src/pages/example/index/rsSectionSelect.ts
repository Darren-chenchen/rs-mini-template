import { Component, Vue } from 'vue-property-decorator'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'

@Component({ components: { RsSectionSelector } })
export default class index extends Vue {
  change(index) {
    console.log(index)
  }
}
