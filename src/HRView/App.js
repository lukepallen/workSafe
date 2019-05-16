import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import HRPageResolved from './HRPageResolved/hrpageresolved.js';
import {ROUTES} from '../constants';
import { Route, Redirect } from 'react-router-dom';
import HRPage from './HRPage/HRPage.js';
import Dashboard from './Dashboard/Dashboard.js';
import Report from "./Report/report.js"

class HRApp extends Component {
  render() {
    if (!this.props.auth.isAuthenticated()) {
      this.props.auth.setEmployeeType('employee');
      this.props.auth.login();
    }
    if (!this.props.auth.getIsHr()) {
      return (
          <div>
              <p>You are not authorized to use this application</p>
          </div>
      )
    }
    return (
      <div className="body">
            <div>
              <Header></Header>
            </div>
            <div className="main">
              <Route path={ROUTES.hrPage} component={HRPage}/>
              <Route path={ROUTES.dashboard} component={Dashboard}/>
              <Route path={ROUTES.hrResolved} component={HRPageResolved}/>
              <Route path={ROUTES.hrReport} component={Report}/>
              <Redirect to={ROUTES.hrPage}></Redirect>
            </div>
          </div>
    );
  }
}

export default HRApp;
