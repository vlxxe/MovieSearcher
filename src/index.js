import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from './store/configureStore'
import App from './containers/App/App'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<Router>
				<App />
			</Router>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
)
