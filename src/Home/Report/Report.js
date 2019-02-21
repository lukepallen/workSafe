import React from 'react';
import DateTime from 'react-datetime';
// import firebase from '../../firebase';
import './Report.scss'
import moment  from 'moment';

class Report extends React.Component {
    constructor() {
        super();
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.state = {
            name: '',
            datetime: '',
            location: '',
            type: '',
            description: '',
        }
    }
    handleTimeChange(value) {
        this.setState({datetime: moment.utc(value).format()})
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
                            <DateTime onChange={this.handleTimeChange} isValidDate={this.checkDate} />
                        </div>
                    </div>
                    <div className="location formSection short">
                        <p className="label">Location</p>
                        <input type="text" className="form-control form-control-sm" aria-describedby="locationInput"></input>
                    </div>
                    <div className="type formSection short">
                        <p className="label">Type of Harassment</p>
                        <select type="text" className="form-control form-control-sm">
                            <option>Test type 1</option>
                            <option>Test type 2</option>
                            <option>Test type 3</option>
                            <option>Test type 4</option>
                        </select>
                    </div>
                    <div className="bystander formSection short">
                        <p className="label">Bystanders Present</p>
                        <input type="text" className="form-control form-control-sm" aria-describedby="bystanderInput"></input>
                    </div>
                    <div className="description formSection">
                        <p className="label">Description</p>
                        <textarea type="text" className="form-control form-control-sm" rows="3"></textarea>
                    </div>
                    <div className="evidence formSection short">
                        <p className="label">Additional Evidence</p>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                    </div>
                </div>
                <div className="submit"><p>Some stuff for submit</p></div>
            </div>
        )
    }
}

export default Report;