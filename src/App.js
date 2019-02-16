import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import {ROUTES} from './constants';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';

class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <div>
                <Header></Header>
              </div>
              <Switch>
                <Redirect exact from="/" to={ROUTES.landing}></Redirect>
                <Route path={ROUTES.landing} component={LandingPage}/>
                <Route path={ROUTES.home} component={Home}/>
                <Route path={ROUTES.profile} component={Profile}/>
                <Route path={ROUTES.dashboard} component={Dashboard}/>
              </Switch>
            </div>
          </Router>
        );
    }
}


export default App;