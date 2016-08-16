import React, { PropTypes } from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from 'reducers'


// middlewares 
import thunk from 'redux-thunk'


// click/tap handlers for material-ui
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();


// material-ui connector
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// main styles
import 'assets/styles/main.scss'


import Header from 'components/Header'


const store = createStore(reducers,
	compose(
		applyMiddleware(thunk),
		// is here we mount redux-devtool
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

// redux saga
// sagaMiddleware.run(rootSaga)

const initApp = (props) => (
	<Provider store={store}>
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<main>
				<Header />
				{props.children}
			</main>
		</MuiThemeProvider>
	</Provider>
);

initApp.propTypes = {
	children: PropTypes.node
};

export default initApp;