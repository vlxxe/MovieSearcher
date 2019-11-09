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
	const { id, favouritesId, addToFavourites, deleteFromFavourites } = props

	const checkOnFav = () => {
		return favouritesId.some(fav => fav === id)
	}

	let isFav = checkOnFav()

	const changeFavourites = id => {
		if (favouritesId.indexOf(id) === -1) {
			return addToFavourites(id)
		}

		return deleteFromFavourites(id)
	}

	return (
		<IconButton onClick={() => changeFavourites(id)}>
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
		addToFavourites: id => dispatch(ActionCreator.addToFavourites(id)),
		deleteFromFavourites: id =>
			dispatch(ActionCreator.deleteFromFavourites(id)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavouritesBtn)
