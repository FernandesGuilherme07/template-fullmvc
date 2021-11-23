import api from '../../services/API'
import axios from 'axios'
let endpoint = 'https://terra-backend.gorealtime.io/users/api/clients/send_sms_login/'
let response = ''
let results = []

export default async function send_sms_login(phone_number) {
  response = await axios({ method: 'post', url: endpoint, data: { phone_number } })
    .then(res => {
      return res
    })
    .catch(error => {
      return null
    })

  return response
}
