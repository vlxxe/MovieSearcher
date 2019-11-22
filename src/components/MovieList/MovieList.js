import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import Button from '@material-ui/core/Button'
import MovieListItem from './MovieListItem'

const styles = {
	movieList: {
		margin: 0,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	button: {
		margin: 20,
	},
}

const MovieList = props => {
	const { items, currentPage, totalPages, btnPage } = props

	if (items === null || items.length === 0) {
		return (
			<Typography variant="body1" align="center">
				Nothing found
			</Typography>
		)
	}

	return (
		<div>
			<GridList style={styles.movieList}>
				{items.map((item, index) => {
					return <MovieListItem key={`${index}${item.id}`} itemData={item} />
				})}
			</GridList>

			{currentPage && totalPages && (
				<Fragment>
					<Typography variant="body1" align="center">
						Page {currentPage} of {totalPages}
					</Typography>

					<Box display="flex" justifyContent="center">
						<Button
							variant="outlined"
							color="primary"
							style={styles.button}
							onClick={() => btnPage('prev')}
						>
							Prev page
						</Button>
						<Button
							variant="outlined"
							color="primary"
							style={styles.button}
							onClick={() => btnPage('next')}
						>
							Next page
						</Button>
					</Box>
				</Fragment>
			)}
		</div>
	)
}

MovieList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	btnPage: PropTypes.func,
	currentPage: PropTypes.number,
	totalPages: PropTypes.number,
}

export default MovieList
