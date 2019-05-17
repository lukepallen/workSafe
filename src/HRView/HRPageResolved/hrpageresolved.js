import React, { Component } from 'react';
import './hrpageresolved.scss';
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

    handleClick(status, name, datetime, type, description, key) {
        this.setState({
            shouldRedirect: true,
            selectedStatus: status,
            selectedDate: datetime,
            selectedName: name,
            selectedType: type,
            selectedDesc: description,
            selectedKey: key
        });
    };

    handleData(currentRows) {
        this.setState({rows: currentRows});
    }

    createRows() {
        let currentRows = []
        this.firebase.getByStatus("Resolved").then(
            snap => {
                for (var i in snap) {
                    let currKey = "";
                    currKey = (Object.keys(snap[i]))[0];
                    let document = snap[i][currKey]
                    var rowid = "t2row" + i;
                    let currStatus = document.status;
                    let currName = document.name;
                    let currDate = document.datetime;
                    let currType = document.type;
                    let currDescription = document.description;
                    currentRows.push(
                        <button key={rowid} onClick={() => this.handleClick(currStatus, currName, currDate, currType, currDescription, currKey)}>
                            <div className="rows">
                                <div className="content">
                                    <div className="head">
                                        <h2> {currName} </h2>
                                        <p className={currStatus.replace(/\s+/g, '')}> {currStatus} </p>
                                    </div>
                                        <p className="date"> {currDate} </p>
                                        <p className="type"> {currType} </p>
                                </div>
                            </div>
                        </button>
                    )
                }
                this.handleData(currentRows);
            }
        )
    }

    render() {
        if (this.state.shouldRedirect) {
            return <Redirect push to={{
                pathname: ROUTES.hrReport,
                state: { 
                    name: this.state.selectedName,
                    status: this.state.selectedStatus,
                    date: this.state.selectedDate,
                    type: this.state.selectedType,
                    description: this.state.selectedDesc,
                    key: this.state.selectedKey
                }
            }} />
        }
        return (
            <div id="table2">
                {this.state.rows}
            </div>
        );
    }
}