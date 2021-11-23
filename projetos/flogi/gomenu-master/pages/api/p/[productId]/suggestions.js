import { productSuggestions } from '../../../../connector'

export default async function(req, res) {
  const { productId } = req.query
  res.json(await productSuggestions(productId, req, res))
}
