import { Component, Vue } from 'vue-property-decorator'
import DateUtil from '@/utils/dateUtil'
import Utils from '@/utils/utils'
@Component({ components: {} })
export default class index extends Vue {
  DateUtil = DateUtil
  Utils = Utils
  testObj: any = {
    date: new Date(),
    price: 1200
  }
  dataCssArr: any[] = [
    {
      title: '常用的css抽取，对于颜色和背景色，为了后续主题的切换，尽量采用使用已经封装的颜色值color.scss',
      value: []
    },
    {
      title: '布局',
      value: [{ detail: 'rs-flex-row: flex横向布局' }, { detail: 'rs-flex-column: flex纵向布局' }]
    },
    {
      title: '线条',
      value: [
        { detail: 'rs-line-1: 一条横线， 高度1/1=1' },
        { detail: 'rs-line-2: 一条横线， 高度1/2=0.5' },
        { detail: 'rs-line-3: 一条横线， 高度1/3=0.3' },
        { detail: 'rs-line-4: 一条横线， 高度1/4=0.25' }
      ]
    },
    {
      title: '间隙',
      value: [
        { detail: 'rs-gap-1: 一条间隔， 高度1*2rpx' },
        { detail: 'rs-gap-2: 一条间隔， 高度2*2rpx' },
        { detail: 'rs-gap-3: 一条间隔， 支持1-50' }
      ]
    },

    {
      title: '增加点击区域的热点, 设置在view上，不能用于image',
      value: [{ detail: 'class="rs-click-expand"' }]
    }
  ]
  mounted() {}
}
