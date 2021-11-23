import api from '../../services/API'
import axios from 'axios'
import Login from './Login'
let endpoint = 'https://portal-api.gorealtime.io/users/api/clients/register/'
let response = ''

export default async function Register(pin_id, pin, first_name, last_name, email, cpf) {
  response = await axios({
    method: 'post',
    url: endpoint,
    data: { pin_id, pin, first_name, last_name, email, cpf },
  })
    .then(async res => {
      await Login(pin_id, pin)
      return res.data
    })
    .catch(async error => {
      await Login(pin_id, pin)
      return null
    })

  return response
}
