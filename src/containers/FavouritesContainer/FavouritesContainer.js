import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {
	ActionCreator,
	Operation,
} from '../../store/Favourites/FavouritesActions'
import MovieList from '../../components/MovieList/MovieList'

const styles = {
	button: {
		margin: 25,
	},
}

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
		const { deleteAllFavourites, favouritesMoviesList } = this.props

		if (favouritesMoviesList) {
			return (
				<React.Fragment>
					<Button
						style={styles.button}
						variant="contained"
						color="secondary"
						onClick={() => deleteAllFavourites()}
					>
						Delete all favourites movies
					</Button>

					<MovieList items={favouritesMoviesList} />
				</React.Fragment>
			)
		}

		return (
			<Typography variant="h4" align="center">
				There is no one your favourites movies!
			</Typography>
		)
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
		deleteAllFavourites: () => dispatch(ActionCreator.deleteAllFavourites()),
		fetchFavouritesMovies: arr =>
			dispatch(Operation.fetchFavouritesMovies(arr)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavouritesContainer)
