import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles({
	root: {
		justifyContent: 'space-between',
	},
	link: {
		textDecoration: 'none',
		color: '#FFFFFF',
		fontSize: 20,
		'&:hover': {
			opacity: 0.8,
		},
	},
})

const Header = () => {
	const classes = useStyles()
	return (
		<AppBar position="static">
			<Toolbar className={classes.root}>
				<Link to="/" className={classes.link}>
					MovieSearcher
				</Link>
				<Link to="/favourites" className={classes.link}>
					Favourites
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Header
