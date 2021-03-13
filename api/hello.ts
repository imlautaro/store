import { VercelRequest, VercelResponse } from '@vercel/node'

export default (req: VercelRequest, res: VercelResponse): void => {
	const { name = 'world' } = req.query
	res.status(200).send(`Hello ${name}`)
}
