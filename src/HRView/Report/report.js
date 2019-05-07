import React, { Component } from 'react';
import './report.css';

export default class Report extends Component {

    render() {
        return(
            <div>
                <SingleReport></SingleReport>
            </div>
        );
    }
}

class SingleReport extends Component {
    render() {
        return(
            <div>
                <Form></Form>
            </div>
        );
    }
}

class Form extends Component {
    render() {
        return(
            <div className="form">
                <div id="header">
                    <h3>
                    Report Name
                    </h3>
                    <select>
                        <option selected="selected" value="validated">Validated</option>
                        <option value="tbd">Awaiting Response</option>
                        <option value="validated">Mediation</option>
                        <option value="tbd">Formal Consequences</option>
                        <option value="final">Final Investigative Report Submitted</option>

                    </select>
                </div>
                <div className="responses">
                    <div className="group">
                        <div className="reponse"> Name:
                            <p className="replies"> Test User </p>
                        </div>
                        <div className="reponse"> Date:
                            <p className="replies"> Date </p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="reponse"> Type: 
                            <p className="replies"> Type </p>
                        </div>
                        <div className="reponse"> Description:
                            <p className="replies"> Description </p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="reponse"> Your Response:
                            <p className="replies"> Current Status </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}