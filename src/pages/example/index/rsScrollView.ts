import { Component, Vue } from 'vue-property-decorator'
import MescrollMixin from '@/components/rs-scroll/mescroll-uni/mescroll-mixins.js' // 非uni_modules版本
import MescrollBody from '@/components/rs-scroll/mescroll-uni/mescroll-body.vue' // 非uni_modules版本
import TestApi from '@/network/TestApi'

@Component({ components: { MescrollBody }, mixins: [MescrollMixin] })
export default class index extends Vue {
  mescroll: any
  downOption: any = {}
  upOption: any = {
    page: {
      size: 10
    },
    empty: {
      tip: '暂无相关数据'
    }
  }
  // 列表数据
  dataList: any[] = []
  downCallback() {
    console.log('downCallback')
    this.mescroll.resetUpScroll()
  }
  upCallback(page) {
    let pageNum = page.num // 页码, 默认从1开始
    let pageSize = page.size // 页长, 默认每页10条
    console.log(pageNum, pageSize)
    let total = 50
    if (pageNum > 1) {
      setTimeout(() => {
        this.dataList = this.dataList.concat([1, 2, 3, 4])
        this.mescroll.endBySize(this.dataList.length, total)
      }, 2000)
    } else {
      setTimeout(() => {
        this.dataList = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
        this.mescroll.endBySize(this.dataList.length, total)
      }, 1000)
    }

    // TestApi.test(pageNum, pageSize)
    //   .then(res => {
    //   })
    //   .catch(() => {})
  }
}
