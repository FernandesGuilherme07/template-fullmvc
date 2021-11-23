import { products } from '../../connector'
import getProducts from '../../hooks/products/getProducts'

export default async function(req, res) {
  const data = await getProducts()
  res.json(await products(req, res, data))
}
