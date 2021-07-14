import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseChart from '@/pagesChart/components/base/base.vue'

@Component({
  components: { BaseChart }
})
export default class pie extends Vue {
  @Prop({ type: Array, default: [] }) chartData: any

  mounted() {}
  initChart(f2, config, chartData) {
    let chart = new f2.Chart(config)
    const data = chartData

    chart.source(data)

    chart.coord('polar', {
      transposed: true,
      radius: 0.6,
      innerRadius: 0.5
    })
    chart.axis(false)
    chart.legend(false)
    chart.tooltip(false)

    chart
      .interval()
      .position('const*money')
      .adjust('stack')
      .color('type', ['#0E8EE9', '#F4EA68', '#F26E12', '#9E42F3', '#BDD259'])

    const myguide = chart.guide().text({
      position: ['50%', '50%'],
      content: ''
    })

    chart.pieLabel({
      activeShape: true,
      sidePadding: 30,
      label1: function label1(data) {
        return {
          text: data.type,
          fill: '#808080'
        }
      },
      label2: function label2(data) {
        return {
          fill: '#000000',
          text: (data.money * 100).toFixed(2) + '%',
          fontWeight: 500,
          fontSize: 10
        }
      },
      onClick: function onClick(ev) {
        const data = ev.data
        if (data) {
          myguide.content = (data.money * 100).toFixed(2) + '%'
          myguide.repaint()
        }
      }
    })
    chart.render()

    return chart
  }
}
