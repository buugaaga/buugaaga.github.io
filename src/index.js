import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme()
ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
