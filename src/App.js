import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import LandingPage from './LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="Header">
          <Header></Header>
        </div>
        <div className="body">
          <LandingPage></LandingPage>
        </div>
      </div>
    );
  }
}

export default App;
