import React, { Component } from 'react';
import {HashRouter as Redirect, Route} from 'react-router-dom';
import {ROUTES} from '../constants';
import Header from './Header/Header';
import Report from './Report/Report';
import Profile from './Profile/Profile';

class EmpApp extends Component {
    render() {
      if (!this.props.auth.isAuthenticated()) {
        this.props.auth.setEmployeeType('employee');
        this.props.auth.login();
      }
      return (
        <div className="body">
          <div>
            <Header></Header>
          </div>
          <div className="main">
            <Route path={ROUTES.empReport} render={(props) => <Report auth={this.props.auth} {...props}/>}/>
            <Route path={ROUTES.profile} render={(props) => <Profile auth={this.props.auth} {...props}/>}/>
            <Redirect to={ROUTES.empReport}></Redirect>
            
          </div>
        </div>
      );
    }
}


export default EmpApp;