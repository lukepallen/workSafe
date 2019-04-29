import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import EmpApp from './EmployeeView/App';
import HRApp from './HRView/App';
import {ROUTES} from './constants';
import Callback from './Callback/Callback';
import Auth from './Auth0/Auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
    console.log(location);
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export default class App extends Component {
    componentDidMount() {
        if (!auth.isAuthenticated()) {
            auth.login();
        } else if (localStorage.get('isLoggedIn') === 'true') {
            auth.renewSession();
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Route path={ROUTES.employee} component={EmpApp}/>
                    <Route path={ROUTES.hr} component={HRApp}/>
                    <Route path={ROUTES.callback} render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }}/>
                </div>
            </Router>
        );
    }
}