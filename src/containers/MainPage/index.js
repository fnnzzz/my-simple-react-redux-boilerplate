import React, { Component } from 'react'
import MainPage from 'components/Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkApp } from 'actions/app'

export default class MainContainer extends Component {
	render() {
		return (
			<MainPage {...this.props} />
		)
	}
}

function mapStateToProps(state) {
  return {
    message: state.app.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkApp: bindActionCreators(checkApp, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)