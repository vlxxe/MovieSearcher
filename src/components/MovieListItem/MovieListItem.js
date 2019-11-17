import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import FavouritesBtn from '../../containers/FavouritesBtn/FavouritesBtn'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

const basePosterPath = 'https://image.tmdb.org/t/p/w300/'
const useStyles = makeStyles({
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
		transition: '0.35s ease',
		'&:hover': {
			transform: 'scale(1.07)',
		},
	},
})

const MovieListItem = props => {
	const classes = useStyles()
	const { poster_path, id, title } = props.item

	const posterPath = poster_path
		? `${basePosterPath}${poster_path}`
		: `/img/not-found.png`

	return (
		<GridListTile className={classes.gridItem} key={id}>
			<Link to={`/\movie?id=${id}`}>
				<img className={classes.img} src={posterPath} alt={title} />
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
