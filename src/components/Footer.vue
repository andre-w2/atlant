<template>
	<div class="container">
		<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
			<p class="col-md-4 mb-0 text-muted">&copy; {{ getFullYear }}</p>

			<router-link :to="{name: 'home'}" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
				<strong>ATLANT.</strong>
			</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'MvcFooter',
		computed: {
			getFullYear() {
				return new Date().getFullYear()
			}
		}
	}
</script>

<style>
	.footer_overlay
	{
		width: 100%;
		height: 129px;
		background: transparent;
		z-index: 1;
	}
	.footer
	{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
	}
	.footer_background
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	.footer_content
	{
		width: 100%;
		height: 129px;
	}
	.footer_logo
	{
		width: 30%;
	}
	.footer_logo a
	{
		font-size: 30px;
		line-height: 0.75;
		color: #1b1b1b;
		font-weight: 700;
	}
	.copyright
	{
		width: 40%;
		text-align: center;
		font-size: 14px;
		font-weight: 400;
		color: #1b1b1b;
	}
</style>