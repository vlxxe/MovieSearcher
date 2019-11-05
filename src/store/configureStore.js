import { createStore, applyMiddleware } from 'redux'
import { compose } from 'recompose'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'

import { apiService } from '../api/api'
const api = new apiService()

export const store = createStore(
	rootReducer,
	compose(applyMiddleware(thunk.withExtraArgument(api)))
)
