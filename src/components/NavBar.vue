<template>
	<header class="p-3 mb-3 border-bottom">
		<div class="container">
			<nav v-if="isLoading" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<div class="container-fluid">
					<router-link :to="{name: 'home'}" 
					class="navbar-brand text-decoration-none">
					<strong @click="sendIndex">ATLANT.</strong>
				</router-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0">
						<template v-for="categorie in categories" :key="categorie.id">
							<li class="nav-item" @click="send">
								<router-link :to="{name: 'home', query: { id: categorie.id}}" 
												class="nav-link px-2"
												:active="active">{{categorie.title}}</router-link>
							</li>
						</template>
					</ul>
				</div>
			</div>
		</nav>
		<fatal-error v-if="fatalError" />
	</div>
</header>
</template>

<script>
	import {mapState} from 'vuex'
	import {actionsTypes} from '@/store/modules/categories'
	import {actionsTypes as typesProduct} from '@/store/modules/product'
	import FatalError from '@/components/FatalError'

	export default {
		name: 'MvcTopBar',
		components: {
			FatalError
		},
		computed: {
			...mapState({
				categories: state => state.categories.categories,
				isLoading: state => state.categories.isLoading,
				fatalError: state => state.categories.fatalError,
			})
		},
		created() {
			this.$store.dispatch(actionsTypes.categories)
		},
		methods: {
			send() {
				this.$store.dispatch(typesProduct.product, {
					id: this.$route.query.id
				})
			},
			sendIndex() {
				this.$store.dispatch(typesProduct.product, {id: 0})
			}
		}
	}
</script>