import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { Contacts } from './pages/Contacts'
import enText from './translations/translations.json'
import ruText from './translations/translations-ru.json'


const App = () => {
  const [ru, setLanguage] = useState(true)

  let text = ru ? ruText : enText

  return (
    <>
      <Navigation setLanguage={setLanguage} ru={ru} />
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home ru={ru} text={text.home} />}
        />
        <Route
          path='/works'
          component={() => <Works ru={ru} text={text.works} />}
        />
        <Route path='/contacts' component={() => <Contacts ru={ru} />} />
      </Switch>
    </>
  )
}
export default App
