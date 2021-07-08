export default class Util {
  deepClone(data) {
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

  hexToRgba(hex, opacity) {
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
}
