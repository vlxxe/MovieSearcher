import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import FavouritesBtn from '../../../containers/FavouritesBtn/FavouritesBtn'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

const styles = {
	title: {
		marginTop: 10,
		marginBottom: 5,
	},
	ul: {
		margin: 0,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	li: {
		width: 200,
		height: 300,
		padding: 0,
		marginRight: 2,
		marginBottom: 2,
	},
	link: {
		textDecoration: 'none',
		color: '#FFFFFF',
	},
}

const RecommendList = props => {
	const baseRecommendPosterPath = 'https://image.tmdb.org/t/p/w200/'
	const items = props.list
		.map(item => {
			let posterPath = item.poster_path
				? `${baseRecommendPosterPath}${item.poster_path}`
				: `/img/not-found.png`
			return (
				<GridListTile style={styles.li} key={item.id}>
					<Link to={`/\movie?id=${item.id}`} style={styles.link}>
						<img src={posterPath} alt={item.title} />
					</Link>
					<GridListTileBar
						title={item.title}
						actionIcon={<FavouritesBtn id={item.id} />}
					></GridListTileBar>
				</GridListTile>
			)
		})
		.slice(0, 18)

	return (
		<React.Fragment>
			<Typography variant="h5" style={styles.title}>
				Recommended movie list
			</Typography>
			<GridList style={styles.ul}>{items}</GridList>
		</React.Fragment>
	)
}

RecommendList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
}

export default RecommendList
