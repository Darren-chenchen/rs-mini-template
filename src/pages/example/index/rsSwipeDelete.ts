import { Component, Vue } from 'vue-property-decorator'
import RsItemSwiper from '@/components/rs-item-swiper/rs-item-swiper.vue'

@Component({ components: { RsItemSwiper } })
export default class index extends Vue {
  data: any[] = [1, 2, 3, 4, 5, 6]

  onDelete(index: number) {
    console.log('删除')
    this.data.splice(index, 1)
  }
  onReset() {
    this.data = [1, 2, 3, 4, 5, 6]
  }
}
