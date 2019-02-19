import React from 'react';
import {Route} from 'react-router-dom';
import {ROUTES} from '../constants';
import SelectType from './SelectType/SelectType';
import Submit from './Submit/Submit';
import './Home.scss'

class Home extends React.Component {
    render() {
        return (
            // <Router>
                <div className="home">
                    <Route exact path={ROUTES.home} component={SelectType}></Route>
                    <Route exact path={ROUTES.submit} component={Submit}></Route>
                </div>
            // </Router>
        )
    }
}

export default Home;