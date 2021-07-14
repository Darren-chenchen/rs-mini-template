var Fly = require('flyio/dist/npm/wx')

var fly = new Fly()
fly.config.baseURL = process.env.VUE_APP_BASE_URL

var Authorization = ''

// 请求拦截
fly.interceptors.request.use((request: any) => {
  request.headers['Content-Type'] = 'application/json'
  request.headers['Authorization'] = Authorization
  let tranceid = new Date().getTime()
  request.headers.trace_id = tranceid
  return request
})
// 返回拦截
fly.interceptors.response.use(
  function(response: any) {
    if (!response.data || (response.data && response.data.success === false)) {
      let error = new Error()
      if (response.data.msg) {
        error.message = response.data.msg
      } else if (response.data.echoMessage) {
        error.message = response.data.echoMessage
      } else {
        error.message = response.status + '服务器内部异常'
      }
      let newError = error as any
      newError.response = response.data
      return Promise.reject(newError)
    } else {
      return Promise.resolve(response.data)
    }
  },
  function(error: any) {
    if (!error.status) {
      let newError = new Error()
      newError.message = '请检查网络设置'
      return Promise.reject(newError)
    }
    switch (error.status) {
      case 1:
        error.message = '网络超时!'
        break
      case 401:
        break
      case 403:
        error.message = '禁止访问!'
        break
      case 503:
        error.message = '服务器升级中!'
        break
      case 500:
        error.message = '服务内部异常!'
        break
      default:
        error.message = '未知错误'
    }
    return Promise.reject(error)
  }
)

export default fly
