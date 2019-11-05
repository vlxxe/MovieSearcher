export const ActionType = {
	FETCH_TREND_LIST_REQUEST: 'FETCH_TREND_LIST_REQUEST',
	FETCH_TREND_LIST_LOADED: 'FETCH_TREND_LIST_LOADED',
	FETCH_ERROR: 'FETCH_ERROR',
}

export const ActionCreator = {
	fetchTrendListRequest: () => ({
		type: ActionType.FETCH_TREND_LIST_REQUEST,
	}),

	fetchTrendListLoaded: data => ({
		type: ActionType.FETCH_TREND_LIST_LOADED,
		payload: data,
	}),

	fetchError: error => ({
		type: ActionType.FETCH_ERROR,
		payload: error,
	}),
}

export const Operation = {
	fetchTrendList: page => (dispatch, getState, api) => {
		dispatch(ActionCreator.fetchTrendListRequest())
		return api
			.getTrendList(page)
			.then(response => {
				dispatch(ActionCreator.fetchTrendListLoaded(response))
			})
			.catch(error => {
				dispatch(ActionCreator.fetchError(error))
			})
	},
}
