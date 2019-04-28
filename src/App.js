import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import EmpApp from './EmployeeView/App';
import HRApp from './HRView/App';
import {ROUTES} from './constants';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={ROUTES.employee} component={EmpApp}/>
                    <Route path={ROUTES.hr} component={HRApp}/>
                </div>
            </Router>
        );
    }
}