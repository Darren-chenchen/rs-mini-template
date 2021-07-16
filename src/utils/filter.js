import Vue from 'vue'

import DateUtil from '@/utils/dateUtil'

/**
 * 过滤器定制
 */
export default class Filter {
  /**
   * 创建vue实例之前，初始化过滤器
   */
  static init() {
    /**
     * 格式化数字或者日期
     * date默认格式： yyyy-MM-dd HH:mm:ss
     */
    Vue.filter('fmt', function(value, format) {
      if (value instanceof Date) {
        return DateUtil.format(value, format)
      }
      return value
    })
    /**
     * 防止为空的显示
     */
    Vue.filter('empty', function(value) {
      return value === null || value === undefined ? '-' : value
    })
    // 保留小数点后num位
    Vue.filter('amt', function(value, num = 2) {
      if (value && Number(value)) {
        return Number(value).toFixed(num)
      }
    })
  }
}
