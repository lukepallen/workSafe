import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Register from './Register/Register';
import EmpApp from './EmployeeView/App';
import HRApp from './HRView/App';
import {ROUTES} from './constants';
import Callback from './Callback/Callback';
import Auth from './Auth0/Auth';

const handleAuthentication = ({location}, auth) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export default class App extends Component {
    auth;

    constructor() {
        super();
        this.auth = new Auth();
    }
    componentDidMount() {
        let splitUrl = window.location.href.split("#");
        if (splitUrl[1].includes('/access_token')) {
            window.location.href = splitUrl[0] + '#/callback#' + splitUrl[1];
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Route path={ROUTES.register} render={(props) => <Register auth={this.auth} {...props} />}/>
                    <Route path={ROUTES.employee} render={(props) => <EmpApp auth={this.auth} {...props} />}/>
                    <Route path={ROUTES.hr} render={(props) => <HRApp auth={this.auth} {...props} />}/>
                    <Route path={ROUTES.callback} render={(props) => {
                        handleAuthentication(props, this.auth);
                        return <Callback {...props} />
                    }}/>
                    <Route exact path={ROUTES.login} render={() => {
                        return (
                            <div style={loginStyle}>
                                <div>
                                    <h4>Login as:</h4>
                                    <button className="btn btn-outline-primary mr-2" onClick={() => {
                                        this.auth.setEmployeeType("employee");
                                        this.auth.login();
                                    }}>Employee</button>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        this.auth.setEmployeeType("hr");
                                        this.auth.login();
                                    }}>HR</button>
                                </div>
                            </div>
                        )
                    }}/>
                </div>
            </Router>
        );
    }
}

const loginStyle = {
    height: "66vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};