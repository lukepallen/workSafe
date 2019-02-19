import React from 'react';
import Datepicker from 'react-bootstrap-date-picker';
// import firebase from '../../firebase';
import './Report.scss'

class Report extends React.Component {
    state = {
        Name: '',
        Date: '',
        Time: '',
        Location: '',
        Type: '',
        Description: '',
    }
    render() {
        return (
            <div className="report">
                <div className="form">
                    <div className="name formSection">
                        <p className="label">Name</p>
                        <p>Test User</p>
                    </div>
                    <div className="dateTime formSection">
                        <div className="date">
                            <p className="label">Date of Occurence</p>
                            <Datepicker/>
                        </div>
                    </div>
                    <div className="location formSection">
                        <p className="label">Location</p>
                        <input type="text" className="form-control form-control-sm" aria-describedby="locationInput"></input>
                    </div>
                    <div className="type formSection">
                        <p className="label">Type of Harassment</p>
                        <select type="text" className="form-control form-control-sm">
                            <option>Test type 1</option>
                            <option>Test type 2</option>
                            <option>Test type 3</option>
                            <option>Test type 4</option>
                        </select>
                    </div>
                    <div className="bystander formSection">
                        <p className="label">Bystanders Present</p>
                        <input type="text" className="form-control form-control-sm" aria-describedby="bystanderInput"></input>
                    </div>
                    <div className="description formSection">
                        <p className="label">Description</p>
                        <textarea type="text" className="form-control form-control-sm" rows="3"></textarea>
                    </div>
                    <div className="evidence formSection">
                        <p className="label">Additional Evidence</p>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                    </div>
                </div>
                <div className="submit"><p>Some stuff for submit</p></div>
            </div>
        )
    }
}

export default Report;