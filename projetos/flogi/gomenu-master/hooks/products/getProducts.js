import axios from 'axios'
import api from '../../services/API'
let endpoint = 'https://portal-api.gorealtime.io/products/api/stores/'
let response = ''
let results = []

export default async function getProducts(storeId) {
  try {
    response = await axios({ method: 'get', url: endpoint + storeId })
    if (response) {
      results.push(response.data)
    }
    return results
  } catch (error) {
    return []
  }
}
