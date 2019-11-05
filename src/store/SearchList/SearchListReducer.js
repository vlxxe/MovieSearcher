import { ActionType } from './SearchListActions'

const initialState = {
	searchQueryList: null,
	currentPage: null,
	totalPages: null,
}

export function searchListReducer(state = initialState, action) {
	switch (action.type) {
		case ActionType.FETCH_SEARCH_QUERY_REQUEST:
			return {
				...state,
				searchQueryList: null,
			}

		case ActionType.FETCH_SEARCH_QUERY_LOADED:
			return {
				...state,
				searchQueryList: action.payload.list,
				currentPage: action.payload.currentPage,
				totalPages: action.payload.totalPages,
			}

		default:
			return state
	}
}
