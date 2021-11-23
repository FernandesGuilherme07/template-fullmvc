import { store } from '../../../connector'
import getProducts from '../../../hooks/products/getProducts'

export default async function pdp(req, res) {
  const { storeId } = req.query
  const products = await getProducts(storeId)
  return res.json(await store(req, res, { products }))
}
