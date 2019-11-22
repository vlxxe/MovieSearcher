import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const styles = {
	credits: {},
	title: {
		marginTop: 10,
		marginBottom: 5,
		marginLeft: 10,
	},
	ul: {
		margin: 0,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	li: {
		width: 150,
		height: 'auto',
		padding: 0,
		marginBottom: 15,
		marginLeft: 10,
	},
}

const CreditsList = props => {
	const baseRecommendProfilePath = 'https://image.tmdb.org/t/p/w185'
	const persons = props.creditsData
		.map(person => {
			let profilePath = person.profile_path
				? `${baseRecommendProfilePath}${person.profile_path}`
				: `/img/not-found.png`
			return (
				<Card style={styles.li} key={person.credit_id}>
					<CardMedia component="img" alt={person.name} image={profilePath} />
					<CardContent style={styles.content}>
						<Typography gutterBottom variant="h5" component="h2" align="center">
							{person.name}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							align="center"
						>
							{person.character}
						</Typography>
					</CardContent>
				</Card>
			)
		})
		.slice(0, 10)

	return (
		<section style={styles.credits}>
			<Typography variant="h5" style={styles.title}>
				Actors
			</Typography>
			<GridList style={styles.ul}>{persons}</GridList>
		</section>
	)
}

CreditsList.propTypes = {
	creditsData: PropTypes.array,
}

export default CreditsList
