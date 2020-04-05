import React, { useState } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Navigation from './components/Navigation'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { Contacts } from './pages/Contacts'


const App = () => {
  
  const [ ru, setLanguage ] = useState(true)

  return (
    <>
      <Navigation setLanguage={setLanguage} ru={ru} />
      <Switch>
        <Route exact path="/" render={() => <Home ru={ru} />} />
        <Route path="/works" component={() => <Works ru={ru} /> }/>
        <Route path="/contacts" component={() => <Contacts ru={ru} />} />
      </Switch>
    </>
  )
}
export default App