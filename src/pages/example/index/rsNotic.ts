import { Component, Vue } from 'vue-property-decorator'
import RsNotice from '@/components/rs-notice/rs-notice.vue'

@Component({ components: { RsNotice } })
export default class index extends Vue {
  $refs: any
  doClose() {
    this.$refs.notice.close()
  }
}
