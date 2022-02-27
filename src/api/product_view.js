import axios from '@/api/axios'

const product_view = id => {
	return axios.post(`/product_view/${id}`)
}

export default {
	product_view,
}