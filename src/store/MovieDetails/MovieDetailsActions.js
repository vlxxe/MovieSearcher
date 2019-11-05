export const ActionType = {
	FETCH_MOVIE_DETAILS_REQUEST: 'FETCH_MOVIE_DETAILS_REQUEST',
	FETCH_MOVIE_DETAILS_LOADED: 'FETCH_MOVIE_DETAILS_LOADED',
	FETCH_MOVIE_RECOMMEND_LIST_LOADED: 'FETCH_MOVIE_RECOMMEND_LIST_LOADED',
	FETCH_ERROR: 'FETCH_ERROR',
}

export const ActionCreator = {
	fetchMovieDetailsRequest: () => ({
		type: ActionType.FETCH_MOVIE_DETAILS_REQUEST,
	}),

	fetchMovieDetailsLoaded: data => ({
		type: ActionType.FETCH_MOVIE_DETAILS_LOADED,
		payload: data,
	}),

	fetchRecommendListLoaded: data => ({
		type: ActionType.FETCH_MOVIE_RECOMMEND_LIST_LOADED,
		payload: data,
	}),

	fetchError: error => ({
		type: ActionType.FETCH_ERROR,
		payload: error,
	}),
}

export const Operation = {
	fetchMovieData: id => (dispatch, getState, api) => {
		dispatch(ActionCreator.fetchMovieDetailsRequest())
		return api
			.getMovieDetails(id)
			.then(response => {
				dispatch(ActionCreator.fetchMovieDetailsLoaded(response))
			})
			
			.catch(error => {
				dispatch(ActionCreator.fetchError(error))
			})
	},

	fetchRecommendList: id => (dispatch, getState, api) => {
		return api
			.getRecommendList(id)
			.then(response => {
				dispatch(ActionCreator.fetchRecommendListLoaded(response))
			})
			.catch(error => {
				dispatch(ActionCreator.fetchError(error))
			})
	},
}
