import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from '../../components/Spinner/Spinner'
import Typography from '@material-ui/core/Typography'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import RecommendListContainer from './RecommendList/RecommendListContainer'
import CreditsListContainer from './CreditsList/CreditsListContainer'

import { Operation } from '../../store/MovieDetails/MovieDetailsActions'

class MovieDetailsContainer extends Component {
	urlParams = new URLSearchParams(this.props.location.search)
	componentDidMount() {
		if (this.urlParams) {
			this.props.fetchMovieData(this.urlParams.get('id'))
		}
	}

	componentDidUpdate(prevProps) {
		let urlParams = new URLSearchParams(this.props.location.search)
		let id = urlParams.get('id')

		if (prevProps.location.search !== this.props.location.search) {
			this.props.fetchMovieData(id)
		}
	}

	render() {
		const { loading, movieData } = this.props.movieDetails

		if (loading) {
			return <Spinner />
		}

		if (movieData === null) {
			return (
				<Typography align="center" variant="h2">
					We can't found this movie!
				</Typography>
			)
		}

		return (
			<MovieDetails movieData={movieData}>
				<CreditsListContainer id={movieData.id} />
				<Typography style={{ marginLeft: 10 }} variant="h5">
					Recomemended movies
				</Typography>
				<RecommendListContainer id={movieData.id} />
			</MovieDetails>
		)
	}
}

const mapStateToProps = store => {
	return {
		movieDetails: store.movieDetails,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchMovieData: id => dispatch(Operation.fetchMovieData(id)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieDetailsContainer)
