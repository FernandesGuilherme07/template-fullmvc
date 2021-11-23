import axios from 'axios'
import api from '../../services/API'
let endpoint = 'https://portal-api.gorealtime.io/products/api/menus/'
let response = ''
let results = []

export default async function getMenu(id) {
  try {
    response = await axios({
      method: 'get',
      url: endpoint + id,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('item_token') },
    })
  } catch (error) {}
  return response
}
