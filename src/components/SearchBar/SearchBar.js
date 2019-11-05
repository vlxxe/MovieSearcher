import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Input from '@material-ui/core/Input'

const SearchBar = ({ getQuery }) => {
	const onSearch = value => {
		let query = value.trim()

		getQuery(query)
	}

	return (
		<Container maxWidth="xs" style={{ padding: '20px 0' }}>
			<Input
				autoFocus
				fullWidth
				placeholder="Enter movie for search"
				onChange={e => onSearch(e.target.value)}
			/>
		</Container>
	)
}

SearchBar.propTypes = {
	getQuery: PropTypes.func,
}

export default SearchBar
