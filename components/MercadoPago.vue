<template>
	<div ref="mercado-pago">Mercado Pago</div>
</template>

<script>
export default {
	methods: {
		createCheckoutButton(preference) {
			const script = document.createElement('script')
			script.src =
				'https:///www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
			script.type = 'text/javascript'
			script.dataset.preferenceId = preference.id
			this.$refs['mercado-pago'].appendChild(script)
		},
	},
	mounted() {
		fetch('/api/mercadopago')
			.then((res) => res.json())
			.then((preference) => {
				this.createCheckoutButton(preference)
			})
			.catch((err) => console.error(err))
	},
}
</script>
