import axios from 'axios'

export class apiService {
	api = axios.create({
		baseURL: 'https://api.themoviedb.org/3',
		withCredentials: false,
	})

	config = {
		params: {
			api_key: '4a718bbb2a1c59738f123345626c802e',
			language: 'en-US',
			page: 1,
		},
	}

	_transformToDataList(response) {
		return {
			list: response.data.results,
			currentPage: response.data.page,
			totalPages: response.data.total_pages,
		}
	}

	getTrendList = async page => {
		const response = await this.api.get(`/trending/movie/week?`, {
			params: {
				...this.config.params,
				page: page,
			},
		})

		if (!response.statusText === 'OK') {
			throw new Error(`Could not fetch received ${response.statusText}`)
		}

		return this._transformToDataList(response)
	}

	getSearchQuery = async (query, page) => {
		const response = await this.api.get(`/search/movie?`, {
			params: {
				...this.config.params,
				query: query,
				page: page,
			},
		})

		if (!response.statusText === 'OK') {
			throw new Error(`Could not fetch received ${response.statusText}`)
		}

		return this._transformToDataList(response)
	}

	getMovieDetails = async id => {
		const response = await this.api.get(`/movie/${id}`, {
			params: {
				...this.config.params,
			},
		})

		if (!response.statusText === 'OK') {
			throw new Error(`Could not fetch received ${response.statusText}`)
		}

		return response.data
	}

	getRecommendList = async id => {
		const response = await this.api.get(`/movie/${id}/recommendations`, {
			params: {
				...this.config.params,
			},
		})

		if (!response.statusText === 'OK') {
			throw new Error(`Could not fetch received ${response.statusText}`)
		}

		return response.data.results
	}

	getFavouritesMovies = async arr => {
		let list = []
		for (let i in arr) {
			list.push(
				this.api
					.get(`/movie/${arr[i]}`, {
						params: {
							...this.config.params,
						},
					})
					.then(res => res.data)
			)
		}
		return Promise.all(list)
	}

	getCreditsList = async id => {
		const response = await this.api.get(`/movie/${id}/credits`, {
			params: {
				...this.config.params,
			},
		})

		if (!response.statusText === 'OK') {
			throw new Error(`Could not fetch received ${response.statusText}`)
		}

		return response.data.cast
	}
}
