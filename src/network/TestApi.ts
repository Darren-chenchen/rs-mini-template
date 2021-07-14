import fly from './fly'
import BaseResponse from '@/model/BaseResponse'

export default class TestApi {
  /**
   * 测试写法，可指定模型
   *
   */
  static test(page: number, pagesize: number): Promise<Nullable<BaseResponse<any>>> {
    let body = {
      sort: 'desc',
      page: page,
      pagesize: pagesize,
      time: new Date().getTime(),
      key: '597dcd8ea7e31e4dbcfd615d47bf7d65'
    }
    return fly.post(``, body, {}).then(res => {
      return res.data
    })
  }
}
