// SDK of Mercado Pago
const mercadopago = require('mercadopago')

// Add credentials
mercadopago.configure({
	access_token: process.env.MP_ACCESS_TOKEN,
})

export default (req, res) => {
	// Create a reference object
	let preference = {
		items: [
			{
				title: 'Product',
				unit_price: 100,
				quantity: 1,
			},
		],
	}

	mercadopago.preferences
		.create(preference)
		.then((resp) => {
			res.json({ id: resp.body.id })
		})
		.catch((err) => console.error(err))
}
