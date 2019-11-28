import React from 'react';
import {
  // Link,
  Switch,
  Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Contacts } from './pages/Contacts';

import { NavBar } from './components/NavBar';
import { NavState } from './context/navState';

class App extends React.Component {

  render() {
    return (
    <>
      <NavState>
        <NavBar />
      </NavState>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </>
    );
  }
}

export default App;
