import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './header';
import FooterComponent from './footer';

import Odometer from './Odometer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Odometer />
        <FooterComponent />
      </div>
    )
  }
}

export default App;
