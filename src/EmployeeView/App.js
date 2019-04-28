import React, { Component } from 'react';
import {HashRouter as Redirect, Route} from 'react-router-dom';
import {ROUTES} from '../constants';
import Header from './Header/Header';
import Report from './Report/Report';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';

class EmpApp extends Component {
    render() {
        return (
          <div className="body">
            <div>
              <Header></Header>
            </div>
            <div className="main">
              <Route path={ROUTES.empReport} component={Report}/>
              <Route path={ROUTES.profile} component={Profile}/>
              <Route path={ROUTES.dashboard} component={Dashboard}/>
              <Redirect to={ROUTES.empReport}></Redirect>
            </div>
          </div>
        );
    }
}


export default EmpApp;