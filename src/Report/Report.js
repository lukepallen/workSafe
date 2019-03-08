import React from 'react';
import DateTime from 'react-datetime';
import FirebaseService from '../Firebase/firebaseService';
import './Report.scss';
import '../DateTime.scss';
import moment  from 'moment';

class Report extends React.Component {
    constructor() {
        super();
        this.reportInfo = {
            name: 'Test User',
            datetime: '',
            location: '',
            type: '',
            description: '',
            status: "Awaiting Review",
        }
        this.firebase = new FirebaseService();
    }
    handleChange(key, value) {
        this.reportInfo[key] =  value;
    }
    checkDate = (curr) => curr - moment(new Date()) <= 0;
    render() {
        return (
            <div className="report">
                <div className="form">
                    <div className="name formSection">
                        <p className="label">Name</p>
                        <p>Test User</p>
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
                    <div className="bystander formSection short">
                        <p className="label">Bystanders Present *</p>
                        <input type="text" className="form-control form-control-sm" aria-describedby="bystanderInput"
                                onChange={evt => this.handleChange("bystanders", evt.currentTarget.value)}></input>
                    </div>
                    <div className="description formSection">
                        <p className="label">Description *</p>
                        <textarea type="text" className="form-control form-control-sm" rows="2"
                                onChange={evt => this.handleChange("description", evt.currentTarget.value)}></textarea>
                    </div>
                    <div className="evidence formSection short">
                        <p className="label">Additional Evidence</p>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                    </div>
                </div>
                <div className="submit">
                    <button className="btn" onClick={() => this.firebase.add(this.reportInfo)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Report;