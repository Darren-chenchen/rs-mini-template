import { Component, Vue } from 'vue-property-decorator'
import Column from '@/pagesChart/components/column/column.vue'
import ColumnH from '@/pagesChart/components/column/column-h.vue'

@Component({ components: { Column, ColumnH } })
export default class index extends Vue {
  chartData: any[] = []
  defValue: any = {}
  width: number = 0

  mounted() {
    this.width = uni.getSystemInfoSync().screenWidth
    this.chartData = [
      {
        year: '1951 年',
        sales: 38
      },
      {
        year: '1952 年',
        sales: 52
      },
      {
        year: '1956 年',
        sales: 61
      },
      {
        year: '1957 年',
        sales: 145
      },
      {
        year: '1958 年',
        sales: 48
      },
      {
        year: '1959 年',
        sales: 38
      },
      {
        year: '1960 年',
        sales: 38
      },
      {
        year: '1962 年',
        sales: 38
      }
    ]
    setTimeout(() => {
      this.defValue = this.chartData[3]
    }, 300)
  }
}
