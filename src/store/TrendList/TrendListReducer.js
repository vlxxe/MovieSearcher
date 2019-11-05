import { ActionType } from './TrendListActions'

const initialState = {
	loading: true,
	error: null,
	trendMovieList: null,
	currentPage: null,
	totalPages: null,
}

export function trendListReducer(state = initialState, action) {
	switch (action.type) {
		case ActionType.FETCH_TREND_LIST_REQUEST:
			return {
				...state,
				loading: true,
				trendMovieList: null,
				error: null,
			}

		case ActionType.FETCH_TREND_LIST_LOADED:
			return {
				...state,
				loading: false,
				trendMovieList: action.payload.list,
				currentPage: action.payload.currentPage,
				totalPages: action.payload.totalPages,
				error: null,
			}

		case ActionType.FETCH_ERROR:
			return {
				...state,
				loading: false,
				trendMovieList: null,
				error: action.payload,
			}

		default:
			return state
	}
}
