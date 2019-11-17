import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from '../../components/Spinner/Spinner'
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator'
import MovieList from '../../components/MovieList/MovieList'
/* Actions */
import { Operation } from '../../store/TrendList/TrendListActions'

class TrendListContainer extends Component {
	urlParams = new URLSearchParams(this.props.location.search)
	componentDidMount() {
		const { fetchTrendList } = this.props
		if (this.urlParams.get('page') !== null) {
			fetchTrendList(this.urlParams.get('page'))
		} else {
			fetchTrendList()
		}
	}

	componentDidUpdate(prevProps) {
		const { fetchTrendList } = this.props
		let urlParams = new URLSearchParams(this.props.location.search)
		let page = urlParams.get('page')

		if (prevProps.location.search !== this.props.location.search) {
			fetchTrendList(page)
		}
	}

	routeChange = page => {
		this.urlParams.set('page', page)

		this.props.history.push(
			this.props.location.pathname + '?' + this.urlParams.toString()
		)
	}

	changePage = direction => {
		let urlParams = new URLSearchParams(this.props.location.search)
		let page = urlParams.get('page') || 1
		const { currentPage, totalPages } = this.props.trendList
		switch (direction) {
			case 'next':
				if (currentPage < totalPages) {
					page++
					this.routeChange(page)
				}
				break

			case 'prev':
				if (currentPage === 1) {
					break
				}
				page--
				this.routeChange(page)
				break

			default:
				break
		}
	}

	render() {
		const {
			loading,
			error,
			trendMovieList,
			currentPage,
			totalPages,
		} = this.props.trendList

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		return (
			<React.Fragment>
				<MovieList
					items={trendMovieList}
					btnPage={this.changePage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</React.Fragment>
		)
	}
}

const mapStateToProps = store => {
	return {
		trendList: store.trendList,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchTrendList: page => dispatch(Operation.fetchTrendList(page)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrendListContainer)
