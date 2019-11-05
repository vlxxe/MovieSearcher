export const ActionType = {
	CHANGE_FAVOURITES: 'CHANGE_FAVOURITES',
	DELETE_ALL_FAVOURITES: 'DELETE_ALL_FAVOURITES',
	FETCH_FAVOURITES_MOVIES_LOADED: 'FETCH_FAVOURITES_MOVIES_LOADED',
}

export const ActionCreator = {
	changeFavourites: id => ({
		type: ActionType.CHANGE_FAVOURITES,
		payload: id,
	}),

	deleteAllFavourites: () => ({
		type: ActionType.DELETE_ALL_FAVOURITES,
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
