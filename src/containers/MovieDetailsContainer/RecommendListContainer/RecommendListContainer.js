import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecommendList from '../../../components/MovieDetails/RecommendList/RecommendList'
import { Operation } from '../../../store/MovieDetails/MovieDetailsActions'

class RecommendListContainer extends Component {
	componentDidMount() {
		this.props.fetchRecommendList(this.props.id)
	}

	render() {
		const { recommendList } = this.props.movieDetails

		if (recommendList === null || recommendList.length === 0) {
			return null
		}

		return <RecommendList list={recommendList} />
	}
}

const mapStateToProps = store => {
	return {
		movieDetails: store.movieDetails,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRecommendList: id => dispatch(Operation.fetchRecommendList(id)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecommendListContainer)
