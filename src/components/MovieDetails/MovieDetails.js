import React from 'react'
import PropTypes from 'prop-types'

import FavouritesBtn from '../../containers/FavouritesBtn/FavouritesBtn'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const MovieDetails = ({ movieData, children }) => {
	const styles = {
		movieDetails: {
			color: 'white',
			backgroundColor: 'rgba(0,0,0,.8)',
		},
		backDrop: {
			backgroundSize: 'cover',
			zIndex: -1,
			width: '100%',
			height: '100%',
			display: 'block',
			position: 'fixed',
			top: 0,
			right: 0,
			left: 0,
		},
		contentContainer: {
			flexGrow: 1,
			fontSize: 0,
		},
		title: {
			marginBottom: 20,
		},
		descWrapper: {
			padding: 20,
		},
		divider: {
			marginTop: 5,
			marginBottom: 5,
		},
		imgWrapper: {
			flexGrow: 0,
		},
	}
	const {
		id,
		title,
		poster_path,
		overview,
		release_date,
		vote_average,
		budget,
		revenue,
		backdrop_path,
	} = movieData

	const urlBasePoster = 'https://image.tmdb.org/t/p/w300'
	const posterPath = poster_path
		? `${urlBasePoster}${poster_path}`
		: `/img/not-found.png`
	if (backdrop_path) {
		styles.backDrop.backgroundImage = `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`
	}

	return (
		<div style={styles.movieDetails}>
			<div style={styles.backDrop} />
			<Grid container style={styles.contentContainer}>
				<Grid item xs style={styles.imgWrapper}>
					<img src={posterPath} alt={title} />
				</Grid>
				<Grid item md={7} style={styles.descWrapper}>
					<Typography variant="h2" style={styles.title}>
						{title}
						<FavouritesBtn id={id} />
					</Typography>
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
			</Grid>
			{children}
		</div>
	)
}

MovieDetails.propTypes = {
	movieData: PropTypes.object,
}

export default MovieDetails
