import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseChart from '@/pagesChart/components/base/base.vue'

@Component({
  components: { BaseChart }
})
export default class line extends Vue {
  @Prop({ type: Array, default: [] }) chartData: any
  @Prop({ type: Object, default: {} }) defValue: any

  mounted() {}
  initChart(f2, config, chartData) {
    let chart = new f2.Chart(config)
    const data = chartData
    chart.legend(false)
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
    chart.source(data, {
      date: {
        tickCount: 3
      }
    })
    chart
      .line()
      .position('date*销售额')
      .shape('smooth')
      .color('#FF624D')
      .adjust('stack')
      .animate({
        appear: {
          animation: 'groupWaveIn',
          duration: 500
        }
      })
    chart
      .line()
      .position('date*订单量')
      .shape('smooth')
      .color('#1F51E6')
      .adjust('stack')
      .animate({
        appear: {
          animation: 'groupWaveIn',
          duration: 500
        }
      })

    chart.render()
    return chart
  }
}
