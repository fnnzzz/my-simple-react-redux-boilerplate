import React, { Component } from 'react'
import { Link } from 'react-router'

// material-ui
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'


export default class Header extends Component {

	render() {

		const buttonsStyle = {  height: 0,  marginRight: 10 };
		const menuContainerStyle = { marginTop: 14 };
		const avatarStyle = { marginTop: 11, marginLeft: 50 };
		const userNameStyle = { fontSize: 14, marginLeft: 10, marginTop: 23, color: "#fff" };
		const signOutStyle = { marginTop: 20, marginLeft: 30, color: "#eee" };

		return (
			<AppBar title="react-redux boilerplate" showMenuIconButton={false}>

				<div style={ menuContainerStyle } >

					<Link to="/">
						<RaisedButton primary={true}  label="Main" style={ buttonsStyle } />
					</Link>

					<Link to="/to404page">
						<RaisedButton label="Another Page" style={ buttonsStyle }/>
					</Link>						

				</div>

				<Avatar style={ avatarStyle }>B</Avatar>
				<p style={ userNameStyle }>boilerplate@fnnzzz.com</p>
				<FontIcon style={ signOutStyle } className="material-icons">input</FontIcon>

			</AppBar>
		)
	}
}