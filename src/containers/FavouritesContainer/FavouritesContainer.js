import React, { Component } from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { Operation } from '../../store/Favourites/FavouritesActions'
import MovieList from '../../components/MovieList/MovieList'

class FavouritesContainer extends Component {
	componentDidMount() {
		const { favouritesId, fetchFavouritesMovies } = this.props
		fetchFavouritesMovies(favouritesId)
	}

	componentDidUpdate(prevProps) {
		const { favouritesId, fetchFavouritesMovies } = this.props
		if (prevProps.favouritesId !== favouritesId) {
			fetchFavouritesMovies(favouritesId)
		}
	}

	render() {
		const { favouritesId, favouritesMoviesList } = this.props

		if (!favouritesId.length) {
			return (
				<Typography variant="h4" align="center">
					There is no one your favourites movies!
				</Typography>
			)
		}

		return <MovieList items={favouritesMoviesList} />
	}
}

const mapStateToProps = store => {
	return {
		favouritesId: store.favourites.favouritesId,
		favouritesMoviesList: store.favourites.favouritesMoviesList,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchFavouritesMovies: arr =>
			dispatch(Operation.fetchFavouritesMovies(arr)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavouritesContainer)
