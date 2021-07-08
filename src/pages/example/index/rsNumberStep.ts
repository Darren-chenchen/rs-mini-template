import { Component, Vue } from 'vue-property-decorator'
import RsNumberStepper from '@/components/rs-number-stepper/rs-number-stepper.vue'

@Component({ components: { RsNumberStepper } })
export default class index extends Vue {
  nummber: Number = 1
}
