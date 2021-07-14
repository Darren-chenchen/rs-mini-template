import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseChart from '@/pagesChart/components/base/base.vue'

@Component({
  components: { BaseChart }
})
export default class lineSingle extends Vue {
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
        fill: '#E1AE5B',
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
        fill: '#E1AE5B',
        lineWidth: 1,
        radius: 3
      },
      showCrosshairs: true,
      alwaysShow: true,
      onShow: function onShow(ev) {
        // const items = ev.items
        // items[0].name = items[0].title
        // items[0].value = ''
      }
    })

    chart.source(data, {
      date: {
        tickCount: 3
      }
    })
    chart.axis('date', {
      // 渲染坐标轴(默认true) 参数一: 选择设置的字段(当前设置的为 x 轴)
      label: function(text, index, total) {
        // 配置坐标轴文本(当值为回调函数时, 返回值必须为对象)
        const textCfg: any = {}
        if (index === 0) {
          textCfg.textAlign = 'center' // textAlign: 设置坐标文本在刻度线的位置
        } else if (index === total - 1) {
          textCfg.textAlign = 'right'
        }
        return textCfg
      }
    })

    chart
      .area()
      .color('l(90) 0:#E1AE5B 1:#f7f7f7')
      .position('date*销售额')
      .animate({
        appear: {
          animation: 'groupWaveIn',
          duration: 500
        }
      })

    chart
      .line()
      .position('date*销售额')
      .shape('smooth')
      .color('#E1AE5B')
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
