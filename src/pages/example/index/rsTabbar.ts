import { Component, Vue } from 'vue-property-decorator'
import RsTab from '@/components/rs-tabs/rs-tab.vue'
import RsTabs from '@/components/rs-tabs/rs-tabs.vue'

@Component({ components: { RsTab, RsTabs } })
export default class index extends Vue {
  active1: number = 0
  active2: number = 0
  active3: number = 0
}
