import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import FavouritesContainer from '../FavouritesContainer/FavouritesContainer'
import Header from '../../components/Header/Header'
import MovieDetailsContainer from '../MovieDetailsContainer/MovieDetailsContainer'

import { ThemeProvider } from '@material-ui/styles'
import theme from '../../style/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import SearchListContainer from '../SearchListContainer/SearchListContainer'
import SearchBarContainer from '../SearchBarContainer/SearchBarContainer'
import TrendListContainer from '../TrendListContainer/TrendListContainer'

const App = () => {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<Header />

					<Switch>
						<Route
							exact
							path="/"
							render={({ location, history }) => (
								<Fragment>
									<SearchBarContainer />
									<TrendListContainer location={location} history={history} />
								</Fragment>
							)}
						/>

						<Route
							exact
							path="/search/movie"
							render={({ location, history }) => (
								<Fragment>
									<SearchBarContainer />
									<SearchListContainer location={location} history={history} />
								</Fragment>
							)}
						/>

						<Route path="/movie" component={MovieDetailsContainer} />

						<Route exact path="/favourites" component={FavouritesContainer} />
					</Switch>
				</CssBaseline>
			</ThemeProvider>
		</Fragment>
	)
}

const mapStateToProps = store => {
	return {}
}

export default connect(mapStateToProps)(App)
