import { ActionType } from './FavouritesActions'

const checkLocalStorage = () => {
	if (!localStorage['favouritesMoviesId']) {
		return []
	}
	return JSON.parse(localStorage.getItem('favouritesMoviesId'))
}

const initialState = {
	favouritesId: checkLocalStorage(),
	favouritesMoviesList: null,
}

export function favouritesReducer(state = initialState, action) {
	switch (action.type) {
		case ActionType.CHANGE_FAVOURITES:
			let sameId = state.favouritesId.indexOf(action.payload)

			if (sameId >= 0) {
				let before = state.favouritesId.slice(0, sameId)
				let after = state.favouritesId.slice(sameId + 1)
				let newArray = [...before, ...after]
				localStorage.setItem('favouritesMoviesId', JSON.stringify(newArray))
				return {
					favouritesId: newArray,
				}
			}

			let newArray = [...state.favouritesId, action.payload]
			localStorage.setItem('favouritesMoviesId', JSON.stringify(newArray))

			return {
				...state,
				favouritesId: newArray,
			}

		case ActionType.DELETE_ALL_FAVOURITES:
			let emptyArray = []
			localStorage.removeItem('favouritesMoviesId')
			return {
				...state,
				favouritesId: emptyArray,
				favouritesMoviesList: null,
			}

		case ActionType.FETCH_FAVOURITES_MOVIES_LOADED:
			return {
				...state,
				favouritesMoviesList: action.payload,
			}

		default:
			return state
	}
}
