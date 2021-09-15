import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
const F2 = require('@antv/f2')
const MyF2 = require('@antv/my-f2')

require('@antv/f2/lib/component/guide') // 加载全部的 guide 组件
const PieLabel = require('@antv/f2/lib/plugin/pie-label')
const Guide = require('@antv/f2/lib/plugin/guide')
const Util = F2.Util
const Animation = require('@antv/f2/lib/animation/detail')

@Component({
  components: {}
})
export default class base extends Vue {
  @Prop({ type: Array, default: [] }) chartData: any
  @Prop({ type: Function, default: () => {} }) renderChart: any
  @Prop({
    type: Object,
    default: () => {
      return {}
    }
  })
  defValue: any

  @Prop({ type: Number, default: 0 }) canvasHeight: any
  @Prop({ type: Number, default: 0 }) canvasWidth: any
  @Prop({ type: String, default: '' }) canvasId: any

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
    if (this.chart) {
      this.chart.clear()
    }
    // #ifdef MP-ALIPAY
    setTimeout(() => {
      dd.createSelectorQuery()
        .select(`#${this.canvasId}`)
        .boundingClientRect()
        .exec(ret => {
          if (ret) {
            if (ret[0]) {
              let data: any = ret[0]
              const pixelRatio = uni.getSystemInfoSync().pixelRatio
              let width = Number(data.width)
              let height = Number(data.height)
              const context: any = dd.createCanvasContext(`${this.canvasId}`)
              context.scale(pixelRatio, pixelRatio)
              const config = { context, width, height, pixelRatio }
              // 钉钉子组件传值机制不适用，待研究
              this.chart = this.renderChart(F2, config, this.chartData)
              if (this.chart) {
                this.canvasEl = this.chart.get('el')
              }
            }
          }
        })
    }, 500)
    // #endif
    // #ifdef H5
    setTimeout(() => {
      uni
        .createSelectorQuery()
        .in(this)
        .select(`#${this.canvasId}`)
        .boundingClientRect(data => {
          const pixelRatio = uni.getSystemInfoSync().pixelRatio
          let width = Number(data.width)
          let height = Number(data.height)
          const context = uni.createCanvasContext(`${this.canvasId}`, this)

          const config = { context, width, height, pixelRatio }

          this.chart = this.renderChart(F2, config, this.chartData)
          if (this.chart) {
            this.canvasEl = this.chart.get('el')
          }
        })
        .exec()
    }, 50)
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
