import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import Routes from './routes'

render(
  <Router history={browserHistory} routes={Routes} />,
  document.getElementById('app_entry')
);