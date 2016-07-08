import React, { Component } from 'react'
import Helmet from 'react-helmet'


export default class NotFound extends Component {
	render() {
		return (
			<div style={{ margin: 50 }}>

				<Helmet title="404" />
				<h1>Page Not Found</h1>

			</div>
		)
	}
}