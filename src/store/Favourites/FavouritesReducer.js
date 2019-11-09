import { ActionType } from './FavouritesActions'

const checkLocalStorage = () => {
	if (!localStorage['favouritesMoviesId']) {
		return []
	}
	return JSON.parse(localStorage.getItem('favouritesMoviesId'))
}

const updateLocalStorage = id => {
	let newArray = checkLocalStorage()
	let sameId = newArray.indexOf(id)

	if (sameId >= 0) {
		newArray.splice(sameId, 1)
	} else {
		newArray.push(id)
	}

	localStorage.setItem('favouritesMoviesId', JSON.stringify(newArray))
}

const initialState = {
	favouritesId: checkLocalStorage(),
	favouritesMoviesList: null,
}

export function favouritesReducer(state = initialState, action) {
	switch (action.type) {
		case ActionType.ADD_TO_FAVOURITES:
			updateLocalStorage(action.payload)
			return {
				...state,
				favouritesId: [...state.favouritesId, action.payload],
			}

		case ActionType.DELETE_FROM_FAVOURITES:
			updateLocalStorage(action.payload)
			let sameId = state.favouritesId.indexOf(action.payload)
			let before = state.favouritesId.slice(0, sameId)
			let after = state.favouritesId.slice(sameId + 1)
			let newArray = [...before, ...after]
			return {
				...state,
				favouritesId: newArray,
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
