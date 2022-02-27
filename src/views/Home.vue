<template>
	<home-slide />
	<Product />
	<icon-box />
</template>

<script>
	import HomeSlide from '@/components/HomeSlide'
	import Product from '@/views/Product'
	import IconBox from '@/components/IconBox'

	export default {
		name: 'MvcHome',
		components: {
			HomeSlide,
			Product,
			IconBox
		}
	}
</script>