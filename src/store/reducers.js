import { combineReducers } from 'redux'

import { searchListReducer } from './SearchList/SearchListReducer'
import { trendListReducer } from './TrendList/TrendListReducer'
import { movieDetailsReducer } from './MovieDetails/MovieDetailsReducer'
import { favouritesReducer } from './Favourites/FavouritesReducer'

export const rootReducer = combineReducers({
	searchList: searchListReducer,
	trendList: trendListReducer,
	movieDetails: movieDetailsReducer,
	favourites: favouritesReducer,
})
