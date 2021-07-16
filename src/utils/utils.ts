export default class Util {
  static deepClone(data) {
    var obj
    if (Object.prototype.toString.call(data) === '[object Array]') {
      obj = []
      for (var i = 0, len = data.length; i < len; i++) {
        obj.push(this.deepClone(data[i]))
      }
    } else if (Object.prototype.toString.call(data) === '[object Object]') {
      obj = {}
      for (var key in data) {
        obj[key] = this.deepClone(data[key])
      }
    } else {
      return data
    }
    return obj
  }

  static hexToRgba(hex, opacity) {
    return hex && hex.replace(/\s+/g, '').length === 7
      ? 'rgba(' +
          parseInt('0x' + hex.slice(1, 3)) +
          ',' +
          parseInt('0x' + hex.slice(3, 5)) +
          ',' +
          parseInt('0x' + hex.slice(5, 7)) +
          ',' +
          opacity +
          ')'
      : ''
  }

  /**
   * 10000 => "10,000"
   * @param {number} num
   */
  static toThousandFilter(num: number) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
  }

  // uuid
  static uuid() {
    return this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4()
  }
  static s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  static isEmpty(v: any) {
    let tp = typeof v
    let rt = false
    if (tp === 'number' && String(v) === '') {
      rt = true
    } else if (tp === 'undefined') {
      rt = true
    } else if (tp === 'object') {
      if (JSON.stringify(v) === '{}' || JSON.stringify(v) === '[]' || v === null) rt = true
    } else if (tp === 'string') {
      if (v === '' || v === 'undefined' || v === 'null' || v === '{}' || v === '[]') rt = true
    } else if (tp === 'function') {
      rt = false
    }
    return rt
  }
}
