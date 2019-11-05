import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import SearchBar from '../../components/SearchBar/SearchBar'

class SearchBarContainer extends Component {
	getQuery = query => {
		if (query.length === 0) {
			this.props.history.push({
				pathname: '/',
			})
		} else {
			this.props.history.push({
				pathname: '/search/movie',
				search: `query=${query}&page=${1}`,
			})
		}
	}

	render() {
		return <SearchBar getQuery={this.getQuery} />
	}
}

export default withRouter(SearchBarContainer)
