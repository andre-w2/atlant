import productApi from '@/api/product.js'

const state = {
	product: null,
	validationErrors: null,
}

export const mutationsTypes = {
	productSuccess: '[product] productSuccess',
	productFailure: '[product] productFailure',
}

export const actionsTypes = {
	product: '[product] product'
}

const mutations = {
	[mutationsTypes.productSuccess](state, payload) {
		state.product = payload
	},
	[mutationsTypes.productFailure](state, payload) {
		state.validationErrors = payload
	},
}

const actions = {
	[actionsTypes.product](context, data) {
		return new Promise(() => {
			productApi.product(data.id)
			.then(response => {
				context.commit(mutationsTypes.productSuccess, response.data)
			})
			.catch(error => {
				console.log(error)
				context.commit(mutationsTypes.productFailure, error.data)
			})
		})
	}
}

export default {
	state,
	mutations,
	actions
}