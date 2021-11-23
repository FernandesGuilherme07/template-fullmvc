import { home } from '../../connector'

export default async function(req, res) {
  res.json(await home(req, res))
}
