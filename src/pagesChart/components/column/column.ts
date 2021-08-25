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

    chart.source(data)

    chart.axis(true)
    chart.legend(true)
    chart.tooltip({
      background: {
        radius: 2,
        fill: '#1F51E6',
        padding: [6, 10]
      },
      crosshairsStyle: {
        stroke: 'rgba(31, 81, 230, 0.2)',
        lineWidth: 1
      }, // 配置辅助线的样式
      showTitle: false,
      showItemMarker: true,
      showXTip: true,
      xTipBackground: {
        fill: '#1F51E6',
        lineWidth: 1,
        radius: 3
      },
      showCrosshairs: true,
      alwaysShow: true,
      onShow: function onShow(ev) {}
    })

    chart.interval().position('year*sales')
    chart.render()

    return chart
  }
}
