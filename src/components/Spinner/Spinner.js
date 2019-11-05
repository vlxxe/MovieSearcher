import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Container from '@material-ui/core/Container'

const Spinner = () => {
	return (
		<Container maxWidth="xl">
			<LinearProgress />
		</Container>
	)
}

export default Spinner
