import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Navigation from './components/Navigation'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { Contacts } from './pages/Contacts'


const App = () => {
  
  // const [ language, setLanguage] = useState(false)

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Home  />} />
        <Route path="/works" component={() => <Works  /> }/>
        <Route path="/contacts" component={() => <Contacts  />} />
      </Switch>
    </>
  )
}
export default App