import axios from '@/api/axios'

const product = id => {
	return axios.get(`/product/${id}`)
}

export default {
	product,
}