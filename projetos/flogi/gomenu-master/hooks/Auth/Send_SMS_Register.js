import api from '../../services/API'
import axios from 'axios'
let endpoint = 'https://portal-api.gorealtime.io/users/api/clients/send_sms_register/'
let response = ''
let results = []

export default async function Send_SMS_Register(phone_number) {
  response = await axios({ method: 'post', url: endpoint, data: { phone_number } })
    .then(res => {
      return res.data
    })
    .catch(error => {
      return null
    })

  return response
}
