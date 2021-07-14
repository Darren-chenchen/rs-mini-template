import { Component, Vue } from 'vue-property-decorator'
import Line from '@/pagesChart/components/line/line.vue'
import LineSingle from '@/pagesChart/components/line-single/lineSingle.vue'

@Component({ components: { Line, LineSingle } })
export default class index extends Vue {
  chartData: any[] = []
  defValue: any = {}

  mounted() {
    for (let index = 0; index < 10; index++) {
      let obj = { date: '', 销售额: 0, 订单量: 0 }
      obj.date = `${index}`
      obj.销售额 = Math.ceil(Math.random() * 10000)
      obj.订单量 = Math.ceil(Math.random() * 100000)
      this.chartData.push(obj)
    }
    setTimeout(() => {
      this.defValue = this.chartData[3]
    }, 300)
  }
}
