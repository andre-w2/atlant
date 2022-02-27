import { createStore } from 'vuex'
import categories from '@/store/modules/categories'
import product from '@/store/modules/product'
import product_view from '@/store/modules/product_view'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    product,
    product_view
  }
})
