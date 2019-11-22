import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Spinner from '../../components/Spinner/Spinner'
import MovieList from '../../components/MovieList/MovieList'

import { Operation } from '../../store/SearchList/SearchListActions'

class SearchListContainer extends Component {
	urlParams = new URLSearchParams(this.props.location.search)
	componentDidMount() {
		const { fetchSearchQuery } = this.props
		if (this.urlParams) {
			fetchSearchQuery(this.urlParams.get('query'), this.urlParams.get('page'))
		}
	}

	componentDidUpdate(prevProps) {
		let urlParams = new URLSearchParams(this.props.location.search)
		let page = urlParams.get('page')
		let query = urlParams.get('query')

		if (prevProps.location.search !== this.props.location.search) {
			this.props.fetchSearchQuery(query, page)
		}
	}

	routeChange = (page, query) => {
		this.urlParams.set('page', page)
		this.urlParams.set('query', query)
		this.props.history.push(
			this.props.location.pathname + '?' + this.urlParams.toString()
		)
	}

	changePage = direction => {
		let urlParams = new URLSearchParams(this.props.location.search)
		let page = urlParams.get('page')
		let query = urlParams.get('query')

		const { currentPage, totalPages } = this.props.searchList

		switch (direction) {
			case 'next':
				if (currentPage < totalPages) {
					page++
					this.routeChange(page, query)
				}
				break

			case 'prev':
				if (currentPage === 1) {
					break
				}
				page--
				this.routeChange(page, query)
				break

			default:
				break
		}
	}

	render() {
		const {
			loading,
			searchQueryList,
			totalPages,
			currentPage,
		} = this.props.searchList
		if (loading) {
			return <Spinner />
		}

		return (
			<Fragment>
				<MovieList
					loading={loading}
					items={searchQueryList}
					btnPage={this.changePage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</Fragment>
		)
	}
}

const mapStateToProps = store => {
	return {
		searchList: store.searchList,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchSearchQuery: (query, page) =>
			dispatch(Operation.fetchSearchQuery(query, page)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListContainer)
