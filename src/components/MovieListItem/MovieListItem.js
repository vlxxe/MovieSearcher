import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import FavouritesBtn from '../../containers/FavouritesBtn/FavouritesBtn'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

const basePosterPath = 'https://image.tmdb.org/t/p/w300/'

const styles = {
	gridItem: {
		width: 300,
		height: 450,
		marginRight: 10,
		marginBottom: 10,
	},
	img: {
		objectFit: 'cover',
		height: '100%',
		width: '100%',
	},
}

const MovieListItem = props => {
	const { poster_path, id, title } = props.item

	const posterPath = poster_path
		? `${basePosterPath}${poster_path}`
		: `/img/not-found.png`

	return (
		<GridListTile style={styles.gridItem} key={id}>
			<Link to={`/\movie?id=${id}`}>
				<img style={styles.img} src={posterPath} alt={title} />
			</Link>
			<GridListTileBar
				title={title}
				actionIcon={<FavouritesBtn id={id} />}
			></GridListTileBar>
		</GridListTile>
	)
}

MovieListItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default MovieListItem
