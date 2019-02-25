import React from 'react';
import {Route} from 'react-router-dom';
import {ROUTES} from '../constants';
import SelectType from './SelectType/SelectType';
import Report from './Report/Report';
import './Home.scss'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Route exact path={ROUTES.home} component={SelectType}></Route>
                <Route exact path={ROUTES.report} component={Report}></Route>
            </div>
        )
    }
}

export default Home;