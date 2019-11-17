import { ActionType } from './MovieDetailsActions'

const initialState = {
	loading: true,
	movieData: null,
	recommendList: null,
	creditsList: null,
	error: null,
}

export function movieDetailsReducer(state = initialState, action) {
	switch (action.type) {
		case ActionType.FETCH_MOVIE_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
				movieData: null,
				error: null,
			}

		case ActionType.FETCH_MOVIE_DETAILS_LOADED:
			return {
				...state,
				loading: false,
				movieData: action.payload,
				error: null,
			}

		case ActionType.FETCH_MOVIE_RECOMMEND_LIST_LOADED:
			return {
				...state,
				recommendList: action.payload,
			}

		case ActionType.FETCH_CREDITS_LIST_LOADED:
			return {
				...state,
				creditsList: action.payload,
			}

		case ActionType.FETCH_ERROR:
			return {
				...state,
				loading: false,
				movieData: null,
				error: action.payload,
			}

		default:
			return state
	}
}
