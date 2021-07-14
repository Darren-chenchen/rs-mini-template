import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
const F2 = require('@antv/f2')
const PieLabel = require('@antv/f2/lib/plugin/pie-label')
const Guide = require('@antv/f2/lib/plugin/guide')
const Animation = require('@antv/f2/lib/animation/detail')

const Util = F2.Util
const Shape = F2.Shape
const G = F2.G
const Global = F2.Global
const Vector2 = G.Vector2
Shape.registerShape('interval', 'tick', {
  draw: function draw(cfg, container) {
    const points = this.parsePoints(cfg.points)
    const style = Util.mix(
      {
        stroke: cfg.color
      },
      Global.shape.interval,
      cfg.style
    )
    if (cfg.isInCircle) {
      let newPoints = points.slice(0)
      if (this._coord.transposed) {
        newPoints = [points[0], points[3], points[2], points[1]]
      }

      const _cfg$center = cfg.center
      const x = _cfg$center.x
      const y = _cfg$center.y

      const v = [1, 0]
      const v0 = [newPoints[0].x - x, newPoints[0].y - y]
      const v1 = [newPoints[1].x - x, newPoints[1].y - y]
      const v2 = [newPoints[2].x - x, newPoints[2].y - y]

      let startAngle = Vector2.angleTo(v, v1)
      let endAngle = Vector2.angleTo(v, v2)
      const r0 = Vector2.length(v0)
      const r = Vector2.length(v1)

      if (startAngle >= 1.5 * Math.PI) {
        startAngle = startAngle - 2 * Math.PI
      }

      if (endAngle >= 1.5 * Math.PI) {
        endAngle = endAngle - 2 * Math.PI
      }

      const lineWidth = r - r0
      const newRadius = r - lineWidth / 2

      return container.addShape('Arc', {
        className: 'interval',
        attrs: Util.mix(
          {
            x,
            y,
            startAngle,
            endAngle,
            r: newRadius,
            lineWidth,
            lineCap: 'round'
          },
          style
        )
      })
    }
  }
})

@Component({
  components: {}
})
export default class progressCircle extends Vue {
  @Prop({ type: Array, default: [] }) chartData: any
  @Prop({ type: Function, default: () => {} }) renderChart: any
  @Prop({ type: Object, default: {} }) defValue: any

  canvasEl: any
  chart: any

  @Watch('chartData')
  chartDataChange(newValue, oldValue) {
    if (newValue) {
      this.init()
      console.log(1111, 'chartDataChange')
    }
  }

  mounted() {
    F2.Chart.plugins.register(PieLabel)
    F2.Chart.plugins.register(Guide)
    F2.Chart.plugins.register(Animation)
  }

  init() {
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

          this.chart = this.initChart(F2, config, this.chartData)

          if (this.chart) {
            this.canvasEl = this.chart.get('el')
          }
        }
      })
    // #endif
  }

  initChart(f2, config, chartData) {
    let chart = new f2.Chart(config)
    let data = chartData
    chart.source(data, {
      y: {
        max: 100,
        min: 0
      }
    })
    chart.axis(false)
    chart.tooltip(false)
    chart.coord('polar', {
      transposed: true,
      innerRadius: 0.8,
      radius: 0.85
    })
    chart.guide().arc({
      start: [0, 0],
      end: [1, 99.98],
      top: false,
      style: {
        lineWidth: 20,
        stroke: '#f8f8f8'
      }
    })
    chart.guide().text({
      position: ['50%', '50%'],
      content: '85%',
      style: {
        fill: '#1890FF'
      }
    })
    chart
      .interval()
      .position('x*y')
      .size(20)
      .shape('tick')
      .animate({
        appear: {
          duration: 1200,
          easing: 'cubicIn',
          animation: function animation(shape, animateCfg) {
            const startAngle = shape.attr('startAngle')
            const endAngle = shape.attr('endAngle')
            console.log(shape, '222')
            // shape.attr('endAngle', startAngle)
            // shape.animate().to(
            //   Util.mix(
            //     {
            //       attrs: {
            //         endAngle
            //       }
            //     },
            //     animateCfg
            //   )
            // )
            //   .onUpdate(function(frame) {
            //     // $('#number').text(parseInt(frame * 85) + '%');
            //   })
          }
        }
      })
    chart.render()

    return chart
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
