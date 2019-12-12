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
import { LanguageSwitch } from './components/LanguageSwitch';

class App extends React.Component {
  
  state = {
      language: false
    }
  
  handleSwitch = (event) => {
    if(event.target.value === "ru") {
      this.setState({
        language: true
      })
      return;
    }
    this.setState({
      language: false
    })
  }

  render() {
    return (
    <>
      <LanguageSwitch handleSwitch={this.handleSwitch} language={this.state.language} />
      <NavState>
        <NavBar language={this.state.language} />
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
