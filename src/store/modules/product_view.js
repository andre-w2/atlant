import productViewApi from '@/api/product_view.js'

const state = {
	product: null,
	validationErrors: null
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
	},
	[mutationsTypes.productViewFailure](state, payload) {
		state.validationErrors = payload
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