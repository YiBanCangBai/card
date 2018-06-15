import {request} from 'wepy'
export default {
  async test() {
    return await request('/test')
  }
}
