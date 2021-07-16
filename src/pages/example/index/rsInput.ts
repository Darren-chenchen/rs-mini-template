import { Component, Vue } from 'vue-property-decorator'
import RsInput from '@/components/rs-input/rs-input.vue'

@Component({ components: { RsInput } })
export default class index extends Vue {
  inputValue: string = ''
  prefixIconClick() {
    console.log('prefixIconClick')
  }
  suffixIconClick() {
    console.log('suffixIconClick')
  }
}
