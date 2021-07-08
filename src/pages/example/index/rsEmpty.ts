import { Component, Vue } from 'vue-property-decorator'
import RsSectionSelector from '@/components/rs-section-selector/rs-section-selector.vue'

@Component({ components: { RsSectionSelector } })
export default class index extends Vue {
  title: string = ''
  subtitle: string = '没有搜索到门店哦~'
  showSlot: boolean = false
  emptyImg: string = '/static/example/img_store.png'

  change1(index) {
    if (index === 0) {
      this.title = ''
      this.subtitle = '没有搜索到门店哦~'
      this.emptyImg = '/static/example/img_store.png'
    }
    if (index === 1) {
      this.title = ''
    }
    if (index === 2) {
      this.title = '暂无门店'
    }
  }

  change3(index) {
    if (index === 0) {
      this.showSlot = false
    }
    if (index === 1) {
      this.showSlot = true
    }
  }
  titleClick() {
    console.log('titleClick')
  }
  onClick() {
    console.log('onClick')
  }
}
