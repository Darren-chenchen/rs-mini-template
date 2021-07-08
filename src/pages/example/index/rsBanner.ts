import { Component, Vue } from 'vue-property-decorator'
import RsBanner from '@/components/rs-banner/rs-banner.vue'

@Component({ components: { RsBanner } })
export default class index extends Vue {
  swiperList: any[] = [
    {
      img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3279463813,881319902&fm=26&gp=0.jpg'
    },
    {
      img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2621666467,967560645&fm=26&gp=0.jpg'
    },
    {
      img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4140144950,545701706&fm=11&gp=0.jpg'
    }
  ]
  clickItem(data) {
    console.log(data)
  }
}
