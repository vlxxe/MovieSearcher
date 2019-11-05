export const ActionType = {
	FETCH_SEARCH_QUERY_REQUEST: 'FETCH_SEARCH_QUERY_REQUEST',
	FETCH_SEARCH_QUERY_LOADED: 'FETCH_SEARCH_QUERY_LOADED',
}

export const ActionCreator = {
	fetchSearchQueryRequest: () => {
		return {
			type: ActionType.FETCH_SEARCH_QUERY_REQUEST,
		}
	},

	fetchSearchQueryLoaded: data => {
		return {
			type: ActionType.FETCH_SEARCH_QUERY_LOADED,
			payload: data,
		}
	},
}

export const Operation = {
	fetchSearchQuery: (query, page) => (dispatch, getState, api) => {
		dispatch(ActionCreator.fetchSearchQueryRequest())

		return api
			.getSearchQuery(query, page)
			.then(response => {
				dispatch(ActionCreator.fetchSearchQueryLoaded(response))
			})
			.catch(error => {
				dispatch(ActionCreator.fetchError(error))
			})
	},
}
