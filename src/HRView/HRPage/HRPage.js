import React, { Component } from 'react';
import './HRPage.css';
import Header from '../Header/header.js'
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
                </Switch>
                <Header></Header>
                <ReportTable></ReportTable>
                <ResolvedTable></ResolvedTable>
            </div>
        )
    }
}

class ReportTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false,
            rows: []
        };
        this.firebase = new FirebaseService();
    }

    handleClick() {
        this.setState({shouldRedirect: true});
    };

    componentDidMount() {
        this.createRows();
    }

    handleData(currentRows) {
        this.setState({rows: currentRows});
    }

    createRows() {
        let currentRows = []
        let statuses = ["Awaiting Review", "Validated", "Mediation", "Formal Consequences", "Final Investigative Report Submitted"];
        for (var j = 0; j < statuses.length; j++) {
            this.firebase.getByStatus(statuses[j]).then(
                snap => {
                    for (var i = 0; i < snap.length; i++) {
                        var rowid = "t1row" + snap[i].datetime + i;
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
                    }
                    this.handleData(currentRows);
                }
            )
        }
    }

    render() {
        if (this.state.shouldRedirect) {
            return <Redirect push to={'../Report/report.js'} />
        }
        return (
            <div id="table1">
                {this.state.rows}
            </div>
        );
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
                        return <Redirect push to={'../Report/report.js'} />
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