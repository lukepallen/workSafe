import React from 'react';
import DateTime from 'react-datetime';
import FirebaseService from '../../Firebase/firebaseService';
import {Redirect} from 'react-router-dom';
import {ROUTES} from '../../constants';
import moment  from 'moment';
import './Report.scss';
import '../DateTime.scss';


class Report extends React.Component {
    constructor() {
        super();
        this.state = {
            userType: '',
            toDashboard: false
        }
        this.reportInfo = {
            name: '',
            datetime: '',
            location: '',
            type: '',
            harasser: '',
            description: '',
            status: "Awaiting Review",
        }
        this.firebase = new FirebaseService();
        this.user = undefined;
    }
    componentDidMount() {
        this.props.auth.user.subscribe(user => {
            this.user = user;
            this.reportInfo.name = this.user.user_metadata.name;
        })
    }
    handleChange(key, value) {
        this.reportInfo[key] =  value;
    }
    checkDate = (curr) => curr - moment(new Date()) <= 0;
    fileReport() {
        this.reportInfo["timeFiled"] = moment().format();
        this.firebase.add(this.reportInfo).then(
            () => this.setState({toDashboard: true})
        )
    }
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to={ROUTES.profile}/>
        }
        return (
            <div className="report">
                {!this.state.userType ? 
                <div className="select">
                    <div className="select-btns">
                        <button className="btn btn1" onClick={() => this.setState({"userType": "bystander"})}>Bystander</button>
                        <button className="btn btn1" onClick={() => this.setState({"userType": "firstHand"})}>First Hand</button>
                    </div>
                </div> 
                : 
                <div className="buffer">
                    <div className="empForm">
                        <div className="name formSection">
                            <p className="label">Name</p>
                            <p>{this.reportInfo.name}</p>
                        </div>
                        <div className="dateTime formSection short">
                            <div className="date">
                                <p className="label">Date and Approximate Time of Occurence</p>
                                <DateTime onChange={value => this.handleChange("datetime", moment.utc(value).format())} isValidDate={this.checkDate} />
                            </div>
                        </div>
                        <div className="location formSection short">
                            <p className="label">Location</p>
                            <input type="text" className="form-control form-control-sm" aria-describedby="locationInput"
                                    onChange={evt => this.handleChange("location", evt.currentTarget.value)}></input>
                        </div>
                        <div className="type formSection short">
                            <p className="label">Type of Harassment</p>
                            <select type="text" className="form-control form-control-sm"
                                    onChange={evt => this.handleChange("type", evt.currentTarget.value)}>
                                <option value="" selected disabled hidden>Select Harassment Type</option>
                                <option>Sexual Harassment</option>
                                <option>Workplace Bullying</option>
                                <option>Retaliation</option>
                                <option>Ageism</option>
                                <option>Racial Harassment</option>
                                <option>Disability-Based Harassment</option>
                            </select>
                        </div>
                        <div className="harasser formSection short">
                            <p className="label">Harasser</p>
                            <input type="text" className="form-control form-control-sm" aria-describedby="harasserInput"
                                    onChange={evt => this.handleChange("harasser", evt.currentTarget.value)}></input>
                        </div>
                        <div className="bystander formSection short">
                            <p className="label">{this.state.userType === 'bystander' ? "Parties ": "Bystanders"} Present </p>
                            <input type="text" className="form-control form-control-sm" aria-describedby="bystanderInput"
                                    onChange={evt => {
                                        let field = this.state.userType === 'bystander' ? "parties ": "bystanders"
                                        this.handleChange(field, evt.currentTarget.value)
                                    }}></input>
                        </div>
                        <div className="description formSection">
                            <p className="label">Description</p>
                            <textarea type="text" className="form-control form-control-sm" rows="2"
                                    onChange={evt => this.handleChange("description", evt.currentTarget.value)}></textarea>
                        </div>
                        <div className="evidence formSection short">
                            <p className="label">Additional Evidence</p>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                        </div>
                    </div>
                    <div className="submit">
                        <button className="btn submitBtn" onClick={() => this.fileReport()}>Submit</button>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Report;