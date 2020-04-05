import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles'
// import { CssBaseline } from '@material-ui/core'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
<Router>
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>
</Router>, 
document.getElementById('root'));

serviceWorker.unregister()
