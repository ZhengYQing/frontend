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
  }
}
