import React, { Component } from 'react'
import { connect } from 'react-redux'

import CreditsList from './CreditsList'
import { Operation } from '../../../store/MovieDetails/MovieDetailsActions'

class CreditsListContainer extends Component {
	componentDidMount() {
		this.props.fetchCreditsList(this.props.id)
	}

	render() {
		const { creditsList } = this.props

		if (creditsList === null || creditsList.length === 0) {
			return null
		}

		return <CreditsList creditsData={creditsList} />
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
