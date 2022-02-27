import axios from '@/api/axios'

const categories = data => {
	return axios.post('/categories', data)
}

export default {
	categories,
}