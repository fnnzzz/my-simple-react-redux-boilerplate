import React, {Component} from 'react'
import Helmet from 'react-helmet'

// material-ui
import RaisedButton from 'material-ui/RaisedButton'

export default class MainPage extends Component {
	render() {

		const { pageTitle, message, checkApp } = this.props;

		return (
			<section>
				<Helmet title={pageTitle} />
				<div style={{margin: 50}}>
					<RaisedButton onClick={checkApp} label="Check App" secondary={true} />
					{ message ? <p style={{ marginTop: 20 }}>{message}</p> : null }
				</div>

			</section>
		);
	}
}