import React, { Component } from 'react';
import './report.scss';
import FirebaseService from '../../Firebase/firebaseService';

export default class Report extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <SingleReport data={this.props.location.state}></SingleReport>
            </div>
        );
    }
}

class SingleReport extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Form data={this.props.data}></Form>
            </div>
        );
    }
}

class Form extends Component {

    constructor(props) {
        super(props);
        this.firebase = new FirebaseService();
        this.state = {
            firstval: this.props.data.status,
            val : this.props.data.status
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            val: e.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            firstval: this.state.val
        })
        this.firebase.updateStatus(this.props.data.key, this.state.val);
    }

    render() {
        return(
            <div className="form">
                <div id="header">
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.val}>
                        <select>
                            <option value="Validated">Validated</option>
                            <option value="Awaiting Review">Awaiting Review</option>
                            <option value="Mediation">Mediation</option>
                            <option value="Corrective Action">Corrective Action</option>
                            <option value="Final Investigative Report Submitted">Final Investigative Report Submitted</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                        <input type="submit" value="submit" />
                    </form>
                </div>
                <div className="responses">
                    <div className="group">
                        <div className="reponse"> Name:
                            <p className="replies"> {this.props.data.name} </p>
                        </div>
                        <div className="reponse"> Date:
                            <p className="replies"> {this.props.data.date} </p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="reponse"> Type: 
                            <p className="replies"> {this.props.data.type} </p>
                        </div>
                        <div className="reponse"> Description:
                            <p className="replies"> {this.props.data.description} </p>
                        </div>
                    </div>
                    <div className="group">
                        <div className="reponse"> Your Response:
                            <p className="replies"> {this.state.firstval} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}