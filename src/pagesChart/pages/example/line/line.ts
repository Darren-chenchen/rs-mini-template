import { Component, Vue } from 'vue-property-decorator'
import LineD from '@/pagesChart/components/line/line-d.vue'
import LineSingle from '@/pagesChart/components/line-single/lineSingle.vue'
const F2 = require('@antv/f2')

@Component({ components: { LineD, LineSingle } })
export default class index extends Vue {
  chartData: any[] = []
  defValue: any = {}
  width: number = 0

  mounted() {
    this.width = uni.getSystemInfoSync().screenWidth
    let arr: any[] = []
    for (let index = 0; index < 10; index++) {
      let obj = { date: '', 销售额: 0, 订单量: 0 }
      obj.date = `${index}`
      obj.销售额 = Math.ceil(Math.random() * 10000)
      obj.订单量 = Math.ceil(Math.random() * 100000)
      arr.push(obj)
    }
    this.chartData = arr
    setTimeout(() => {
      this.defValue = this.chartData[3]
    }, 300)
  }
}
