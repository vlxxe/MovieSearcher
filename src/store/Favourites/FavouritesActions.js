export const ActionType = {
	ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
	DELETE_FROM_FAVOURITES: 'DELETE_FROM_FAVOURITES',
	FETCH_FAVOURITES_MOVIES_LOADED: 'FETCH_FAVOURITES_MOVIES_LOADED',
}

export const ActionCreator = {
	addToFavourites: id => ({
		type: ActionType.ADD_TO_FAVOURITES,
		payload: id,
	}),
	deleteFromFavourites: id => ({
		type: ActionType.DELETE_FROM_FAVOURITES,
		payload: id,
	}),
	fetchFavouritesMoviesLoaded: data => ({
		type: ActionType.FETCH_FAVOURITES_MOVIES_LOADED,
		payload: data,
	}),
}

export const Operation = {
	fetchFavouritesMovies: arr => (dispatch, getState, api) => {
		return api
			.getFavouritesMovies(arr)
			.then(response => {
				dispatch(ActionCreator.fetchFavouritesMoviesLoaded(response))
			})
			.catch(error => {
				dispatch(error)
			})
	},
}
