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
                <Route exact path={ROUTES.landing} component={LandingPage}/>
                <Route exact path={ROUTES.home} component={Home}/>
                <Route exact path={ROUTES.Dashboard} component={Dashboard}/>
                <Route exact path={ROUTES.Profile} component={Profile}/>
                <Redirect to={ROUTES.landing}/>
              </Switch>
            </div>
          </Router>
        );
    }
}


export default App;