import { Component, Vue } from 'vue-property-decorator'
import RsTab from '@/components/rs-tabs/rs-tab.vue'
import RsTabs from '@/components/rs-tabs/rs-tabs.vue'

@Component({ components: { RsTabs, RsTab } })
export default class index extends Vue {
  active1: number = 0
  active2: number = 0
  dataArr1: string[] = [
    'rsIcon-add-circle',
    'rsIcon-add',
    'rsIcon-arrow-left',
    'rsIcon-arrow-down',
    'rsIcon-arrow-right',
    'rsIcon-arrow-up',
    'rsIcon-cate',
    'rsIcon-check-circle-uncheck',
    'rsIcon-check-circle',
    'rsIcon-check',
    'rsIcon-close-circle',
    'rsIcon-close',
    'rsIcon-help-circle',
    'rsIcon-eye-open',
    'rsIcon-eye-close',
    'rsIcon-delete-keyboard',
    'rsIcon-info-circle',
    'rsIcon-list',
    'rsIcon-minus-circle',
    'rsIcon-minus',
    'rsIcon-phone',
    'rsIcon-safe',
    'rsIcon-search',
    'rsIcon-warn-circle'
  ]
  dataArr2: string[] = [
    'rsIcon-add-fill',
    'rsIcon-warn-fill',
    'rsIcon-info-fill',
    'rsIcon-help-fill',
    'rsIcon-minus-fill',
    'rsIcon-close-fill',
    'rsIcon-check-circle-checked',
    'rsIcon-delete-keyboard-fill',
    'rsIcon-check-tag_up',
    'rsIcon-check-tag-down',
    'rsIcon-visible',
    'rsIcon-invisible'
  ]
}
