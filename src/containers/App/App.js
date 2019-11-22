import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import FavouritesContainer from '../FavouritesContainer/FavouritesContainer'
import Header from '../../components/Header/Header'
import MovieDetailsContainer from '../MovieDetailsContainer/MovieDetailsContainer'

import { ThemeProvider } from '@material-ui/styles'
import theme from '../../style/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import SearchListContainer from '../SearchListContainer/SearchListContainer'
import SearchBarContainer from '../SearchBarContainer/SearchBarContainer'
import TrendListContainer from '../TrendListContainer/TrendListContainer'

const App = () => {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<Header />
					<Container maxWidth="md">
						<Switch>
							<Route
								exact
								path="/"
								render={({ location, history }) => (
									<Fragment>
										<Container maxWidth="md">
											<SearchBarContainer />
											<TrendListContainer
												location={location}
												history={history}
											/>
										</Container>
									</Fragment>
								)}
							/>

							<Route
								exact
								path="/search/movie"
								render={({ location, history }) => (
									<Fragment>
										<Container maxWidth="md">
											<SearchBarContainer />
											<SearchListContainer
												location={location}
												history={history}
											/>
										</Container>
									</Fragment>
								)}
							/>

							<Route path="/movie" component={MovieDetailsContainer} />

							<Route exact path="/favourites" component={FavouritesContainer} />
						</Switch>
					</Container>
				</CssBaseline>
			</ThemeProvider>
		</Fragment>
	)
}

const mapStateToProps = store => {
	return {}
}

export default connect(mapStateToProps)(App)
