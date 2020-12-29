import axios from 'axios'
export default {
  phone (phone) {
    return axios.post('/user/phone', {
      phone
    })
  },
  code (phone) {
    return axios.post('/user/code', {
      phone
    })
  },
  checkCode (phone, code) {
    return axios.post('/user/checkCode', {
      phone
      // =>对于密码进行传输加密（MDS：不可逆转加密）
    })
  },
  register () {
    return axios.post('/user/')
  }
}
