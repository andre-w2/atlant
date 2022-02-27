import categoriesApi from '@/api/categories.js'

const state = {
	categories: null,
	validationErrors: null
}

export const mutationsTypes = {
	categoriesSuccess: '[categories] categoriesSuccess',
	categoriesFailure: '[categories] categoriesFailure',
}

export const actionsTypes = {
	categories: '[categories] categories'
}

const mutations = {
	[mutationsTypes.categoriesSuccess](state, payload) {
		state.categories = payload
	},
	[mutationsTypes.categoriesFailure](state, payload) {
		state.validationErrors = payload
	},
}

const actions = {
	[actionsTypes.categories](context) {
		return new Promise(() => {
			categoriesApi.categories()
			.then(response => {
				context.commit(mutationsTypes.categoriesSuccess, response.data)
			})
			.catch(error => {
				console.log(error)
				context.commit(mutationsTypes.categoriesFailure, error.data)
			})
		})
	}
}

export default {
	state,
	mutations,
	actions
}