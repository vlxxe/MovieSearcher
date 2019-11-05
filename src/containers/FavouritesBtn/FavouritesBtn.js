import React from 'react'
import { connect } from 'react-redux'

import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { ActionCreator } from '../../store/Favourites/FavouritesActions'

let styles = {
	favorite: {
		color: 'grey',
	},
	favoriteActive: {
		color: 'red',
	},
}

const FavouritesBtn = props => {
	const { id, favouritesId, changeFav } = props

	const checkOnFav = () => {
		return favouritesId.some(fav => fav === id)
	}

	let isFav = checkOnFav()

	return (
		<IconButton onClick={() => changeFav(id)}>
			<FavoriteIcon style={isFav ? styles.favoriteActive : styles.favorite} />
		</IconButton>
	)
}

const mapStateToProps = store => {
	return {
		favouritesId: store.favourites.favouritesId,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeFav: id => dispatch(ActionCreator.changeFavourites(id)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavouritesBtn)
