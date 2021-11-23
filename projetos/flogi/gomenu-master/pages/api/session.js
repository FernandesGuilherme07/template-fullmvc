import { session } from '../../connector'

export default async function(req, res) {
  res.json(await session(req, res))
}
