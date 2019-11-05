import React from 'react'
import PropTypes from 'prop-types'

import FavouritesBtn from '../../containers/FavouritesBtn/FavouritesBtn'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const styles = {
	root: {
		flexGrow: 1,
	},
	title: {
		marginTop: 20,
		marginBottom: 20,
	},
	divider: {
		marginTop: 5,
		marginBottom: 5,
	},
}

const MovieDetails = ({ movieData, recommendList }) => {
	const {
		id,
		title,
		poster_path,
		overview,
		release_date,
		vote_average,
		budget,
		revenue,
	} = movieData

	const urlBasePoster = 'https://image.tmdb.org/t/p/w300/'
	const posterPath = poster_path
		? `${urlBasePoster}${poster_path}`
		: `/img/not-found.png`

	return (
		<Container maxWidth="lg" display="flex">
			<Typography variant="h2" style={styles.title}>
				{title}
				<FavouritesBtn id={id} />
			</Typography>
			<Grid container style={styles.root}>
				<Grid item xs>
					<img src={posterPath} alt={title} />
				</Grid>
				<Grid item xs={8}>
					<Typography variant="body1">{overview}</Typography>
					<Divider style={styles.divider} />
					<Typography variant="body1">Rating: {vote_average}</Typography>
					<Divider style={styles.divider} />
					<Typography variant="body1">Budget: {budget} $</Typography>
					<Divider style={styles.divider} />
					<Typography variant="body1">Revenue: {revenue} $</Typography>
					<Divider style={styles.divider} />
					<Typography variant="body1">Release: {release_date}</Typography>
				</Grid>
				{recommendList}
			</Grid>
		</Container>
	)
}

MovieDetails.propTypes = {
	movieData: PropTypes.object,
	children: PropTypes.element,
}

export default MovieDetails
