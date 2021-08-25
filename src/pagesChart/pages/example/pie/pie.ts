import { Component, Vue } from 'vue-property-decorator'
import Pie from '@/pagesChart/components/pie/pie.vue'

@Component({ components: { Pie } })
export default class index extends Vue {
  chartData: any[] = []
  width: number = 0

  mounted() {
    this.width = uni.getSystemInfoSync().screenWidth

    for (let i = 0; i < 3; i++) {
      let obj = { type: '', money: 0, const: 'const' }
      obj.type = `type${i}`
      obj.money = Number(Math.ceil(Math.random() * 100) / 100)
      this.chartData.push(obj)
    }
  }
}
