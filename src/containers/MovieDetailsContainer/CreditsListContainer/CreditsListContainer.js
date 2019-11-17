import React, { Component } from 'react'
import { connect } from 'react-redux'

import CreditsList from '../../../components/MovieDetails/CreditsList/CreditsList'
import { Operation } from '../../../store/MovieDetails/MovieDetailsActions'

class CreditsListContainer extends Component {
	componentDidMount() {
		this.props.fetchCreditsList(this.props.id)
		console.log('helloo')
	}

	render() {
		const { creditsList } = this.props
		console.log(creditsList)

		if (creditsList === null || creditsList.length === 0) {
			return null
		}

		return <CreditsList list={creditsList} />
	}
}

const mapStateToProps = store => {
	return {
		creditsList: store.movieDetails.creditsList,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCreditsList: id => dispatch(Operation.fetchCreditsList(id)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreditsListContainer)
