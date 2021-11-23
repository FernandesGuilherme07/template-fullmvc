import api from '../../services/API'
import axios from 'axios'
let endpoint = 'https://portal-api.gorealtime.io/users/api/clients/login/'
let response = ''
let results = []

export default async function Login(username, password) {
  response = await axios({
    method: 'post',
    url: endpoint,
    data: { pin_id: username, pin: password },
  })
    .then(res => {
      localStorage.setItem('item_token', res.data.token)
      localStorage.setItem('item_id', res.data.user.id)
      localStorage.setItem('item_name', res.data.user.profile.name)
      localStorage.setItem('item_phone', res.data.user.profile.phone_number)
      window.location.href = '/store'
      console.log(res)
      return res
    })
    .catch(error => {
      error.response
      return error.response
    })

  return response
}
