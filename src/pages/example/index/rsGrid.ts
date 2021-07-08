import { Component, Vue } from 'vue-property-decorator'
import RsGrid from '@/components/rs-grid/rs-grid.vue'

@Component({ components: { RsGrid } })
export default class index extends Vue {
  dataArr: any[] = [
    { img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3279463813,881319902&fm=26&gp=0.jpg', name: '测试1' },
    { img: 'http://img2.imgtn.bdimg.com/it/u=3035889490,728308378&fm=15&gp=0.jpg', name: '测试2' },
    { img: 'http://img2.imgtn.bdimg.com/it/u=3035889490,728308378&fm=15&gp=0.jpg', name: '测试3' },
    { img: 'http://img2.imgtn.bdimg.com/it/u=3035889490,728308378&fm=15&gp=0.jpg', name: '测试4' },
    { img: 'http://img2.imgtn.bdimg.com/it/u=3035889490,728308378&fm=15&gp=0.jpg', name: '测试5' },
    { img: 'http://img2.imgtn.bdimg.com/it/u=3035889490,728308378&fm=15&gp=0.jpg', name: '测试6' },
    { img: 'http://img2.imgtn.bdimg.com/it/u=3035889490,728308378&fm=15&gp=0.jpg', name: '测试7' },
    { img: 'http://img2.imgtn.bdimg.com/it/u=303588949', name: '测试8' }
  ]
}
