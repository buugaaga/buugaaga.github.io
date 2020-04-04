import React, {useState} from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Navigation from './components/Navigation'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { Contacts } from './pages/Contacts'


const App = () => {
  
  const [ language, setLanguage] = useState(false)

  return (
    <>
      <Navigation />
      <Link to='works'>to works</Link>
      <Link to='contacts'>to contacts</Link>
      <Switch>
        <Route exact path="/" render={() => <Home  />} />
        <Route path="/works" component={() => <Works  /> }/>
        <Route path="/contacts" component={() => <Contacts  />} />
      </Switch>
    </>
  )
}
export default App