import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
require('@antv/f2/lib/component/guide') // 加载全部的 guide 组件
const PieLabel = require('@antv/f2/lib/plugin/pie-label')
const Guide = require('@antv/f2/lib/plugin/guide')
const F2 = require('@antv/f2')
const Util = F2.Util
const Animation = require('@antv/f2/lib/animation/detail')

@Component({
  components: {}
})
export default class base extends Vue {
  @Prop({ type: Array, default: [] }) chartData: any
  @Prop({ type: Function, default: () => {} }) renderChart: any
  @Prop({ type: Object, default: {} }) defValue: any

  canvasEl: any
  chart: any

  @Watch('chartData')
  chartDataChange(newValue, oldValue) {
    if (newValue) {
      this.init()
    }
  }
  @Watch('defValue')
  defValueChange(newValue, oldValue) {
    if (newValue && this.chart) {
      setTimeout(() => {
        // 默认展示 tooltip
        const item = newValue // 要展示 tooltip 的数据
        const point = this.chart.getPosition(item) // 获取该数据的画布坐标
        this.chart.showTooltip(point) // 展示该点的 tooltip
      }, 500)
    }
  }

  mounted() {
    F2.Chart.plugins.register(PieLabel)
    F2.Chart.plugins.register(Guide)
    F2.Chart.plugins.register(Animation)
  }

  init() {
    // #ifdef H5
    // const pixelRatio = uni.getSystemInfoSync().pixelRatio
    // const config = {
    //   id: 'f2-canvasId',
    //   pixelRatio: pixelRatio // 指定分辨率
    // }
    // this.chart = this.renderChart(F2, config, this.chartData)
    // if (this.chart) {
    //   this.canvasEl = this.chart.get('el')
    // }
    console.log(122222)
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ]

    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'f2-canvasId',
      pixelRatio: uni.getSystemInfoSync().pixelRatio // 指定分辨率
    })

    console.log(chart, 111)

    // Step 2: 载入数据源
    chart.source(data)

    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart
      .interval()
      .position('genre*sold')
      .color('genre')

    // Step 4: 渲染图表
    chart.render()
    // #endif

    // #ifdef MP-WEIXIN
    const query = wx.createSelectorQuery().in(this as any)
    query
      .select('.f2-canvas')
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        if (!res[0]) {
          return
        }
        const { node, width, height } = res[0]
        if (node) {
          const context = node.getContext('2d')
          const pixelRatio = wx.getSystemInfoSync().pixelRatio
          // 高清设置
          node.width = width * pixelRatio
          node.height = height * pixelRatio

          const config = { context, width, height, pixelRatio }

          this.chart = this.renderChart(F2, config, this.chartData)

          if (this.chart) {
            this.canvasEl = this.chart.get('el')
          }
        }
      })
    // #endif
  }

  touchStart(e) {
    const canvasEl = this.canvasEl
    if (!canvasEl) {
      return
    }
    canvasEl.dispatchEvent('touchstart', this.wrapEvent(e))
  }
  touchMove(e) {
    const canvasEl = this.canvasEl
    if (!canvasEl) {
      return
    }
    canvasEl.dispatchEvent('touchmove', this.wrapEvent(e))
  }
  touchEnd(e) {
    const canvasEl = this.canvasEl
    if (!canvasEl) {
      return
    }
    canvasEl.dispatchEvent('touchend', this.wrapEvent(e))
  }
  wrapEvent(e) {
    if (!e) return
    if (!e.preventDefault) {
      e.preventDefault = function() {}
    }
    return e
  }
}
