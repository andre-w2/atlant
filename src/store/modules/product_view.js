import productViewApi from '@/api/product_view.js'

const state = {
	isLoading: false,
	product: null,
	validationErrors: null,
	fatalError: false
}

export const mutationsTypes = {
	productViewSuccess: '[product] productViewSuccess',
	productViewFailure: '[product] productFailure',
}

export const actionsTypes = {
	product_view: '[product] product_view'
}

const mutations = {
	[mutationsTypes.productViewSuccess](state, payload) {
		state.product = payload
		state.isLoading = true
	},
	[mutationsTypes.productViewFailure](state, payload) {
		state.validationErrors = payload
		state.fatalError = true
	},
}

const actions = {
	[actionsTypes.product_view](context, data) {
		return new Promise(() => {
			productViewApi.product_view(data.id)
			.then(response => {
				context.commit(mutationsTypes.productViewSuccess, response.data)
			})
			.catch(error => {
				console.log(error)
				context.commit(mutationsTypes.productViewFailure, error.data)

			})
		})
	}
}

export default {
	state,
	mutations,
	actions
}