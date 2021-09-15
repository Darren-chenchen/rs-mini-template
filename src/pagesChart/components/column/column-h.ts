import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseChart from '@/pagesChart/components/base/base.vue'

@Component({
  components: { BaseChart }
})
export default class index extends Vue {
  @Prop({ type: Array, default: [] }) chartData: any
  @Prop({ type: Number, default: 250 }) height: any
  @Prop({ type: Number, default: 375 }) width: any
  @Prop({ type: String, default: '' }) canvasId: any
  @Prop({ type: Object, default: {} }) defValue: any

  mounted() {}
  initChart(f2, config, chartData) {
    let chart = new f2.Chart(config)
    const data = chartData

    chart.source(data, {
      sales: {
        tickCount: 5
      }
    })
    chart.coord({
      transposed: true
    })
    chart.tooltip({
      showItemMarker: false,
      onShow: function onShow(ev) {
        const items = ev.items
        items[0].name = null
        items[0].name = items[0].title
        items[0].value = '¥ ' + items[0].value
      }
    })
    chart.interval().position('year*sales')
    chart.render()

    return chart
  }
}
