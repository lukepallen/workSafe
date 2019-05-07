import React, { Component } from 'react';
import './App.css';
import Header from './Header/header.js';
import Report from './Report/report.js';
import HRPageResolved from './HRPageResolved/hrpageresolved.js';
import {ROUTES} from '../constants';
import { Route, Switch, Redirect } from 'react-router-dom';
import HRPage from './HRPage/HRPage.js';
import Dashboard from './Dashboard/Dashboard.js';

class HRApp extends Component {
  render() {
    return (
      <div className="body">
            <div>
              <Header></Header>
            </div>
            <div className="main">
              <Route path={ROUTES.hrPage} component={HRPage}/>
              <Route path={ROUTES.dashboard} component={Dashboard}/>
              <Route path={ROUTES.hrResolved} component={HRPageResolved}/>
              <Redirect to={ROUTES.hrPage}></Redirect>
            </div>
          </div>
    );
  }
}

export default HRApp;
