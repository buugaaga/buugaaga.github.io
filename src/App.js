import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Contacts } from './pages/Contacts';

import { NavBar } from './components/NavBar';
import { NavState } from './context/navState';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: false
    }
  }

  render() {
    return (
    <>
      <NavState>
        <NavBar />
      </NavState>
      <Switch>
        <Route exact path="/" render={() => <Home language={this.state.language} />} />
          
    <Route path="/works" component={() => <Works  language={this.state.language} /> }/>
          
        <Route path="/contacts" component={() => <Contacts language={this.state.language} />} />
          
      </Switch>
    </>
    );
  }
}

export default App;
