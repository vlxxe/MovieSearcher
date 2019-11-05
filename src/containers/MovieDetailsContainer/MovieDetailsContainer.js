import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from '../../components/Spinner/Spinner'
import Typography from '@material-ui/core/Typography'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import RecommendListContainer from './RecommendListContainer/RecommendListContainer'
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
			<MovieDetails
				movieData={movieData}
				recommendList={<RecommendListContainer id={movieData.id} />}
			/>
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
