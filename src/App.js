import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import {ROUTES} from './constants';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Report from './Report/Report';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';

class App extends Component {
    render() {
        return (
          <Router>
            <div className="body">
              <div>
                <Header></Header>
              </div>
              <div className="main">
                <Switch>
                  {/* <Route path={ROUTES.landing} component={LandingPage}/> */}
                  <Route path={ROUTES.report} component={Report}/>
                  <Route path={ROUTES.profile} component={Profile}/>
                  <Route path={ROUTES.dashboard} component={Dashboard}/>
                  <Redirect to={ROUTES.report}></Redirect>
                </Switch>
              </div>
            </div>
          </Router>
        );
    }
}


export default App;