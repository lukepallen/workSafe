import React, { Component } from 'react';
import './hrpageresolved.css';
import Report from '../Report/report.js';
import {ROUTES} from '../../constants';
import { Route, Switch, Redirect } from 'react-router-dom';
import FirebaseService from '../../Firebase/firebaseService';

export default class HRPage extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={ROUTES.hrReport} component={Report}></Route>
                    {/* <Route path={ROUTES.hrReport} component={Report}></Route> */}
                </Switch>
                <ResolvedTable></ResolvedTable>
            </div>
        )
    }
}


class ResolvedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false,
            rows: []
        };
        this.firebase = new FirebaseService();
    }

    componentDidMount() {
        this.createRows();
    }

    handleClick() {
        this.setState({shouldRedirect: true});
    };

    handleData(currentRows) {
        this.setState({rows: currentRows});
    }

    createRows() {
        let currentRows = []
        this.firebase.getByStatus("Resolved").then(
            snap => {
                for (var i = 0; i < snap.length; i++) {
                    var rowid = "t2row" + i;
                    currentRows.push(
                        <button key={rowid} onClick={() => this.handleClick()}>
                            <div className="rows">
                                <div className="content">
                                    <div className="head">
                                        <h2> {snap[i].name} </h2>
                                        <p className={snap[i].status.replace(/\s+/g, '')}> {snap[i].status} </p>
                                    </div>
                                        <p className="date"> {snap[i].datetime} </p>
                                        <p className="type"> {snap[i].type} </p>
                                </div>
                            </div>
                        </button>
                    )
                    if (this.state.shouldRedirect) {
                        return <Redirect push to={ROUTES.hrReport} />
                    }
                }
                this.handleData(currentRows);
            }
        )
    }

    render() {
        return (
            <div id="table2">
                {this.state.rows}
            </div>
        );
    }
}