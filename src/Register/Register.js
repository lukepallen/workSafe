import React from 'react';
import './Register.scss'

class Register extends React.Component {
    constructor() {
        super();
        this.meta = {
            name: '',
            user_id: '',
            isHr: false
        }
    }
    updateUser() {
        if (!this.meta.name) {
            alert("Please enter a valid name");
        } else {
            if (!this.meta.user_id) {
                delete this.meta.user_id;
            }
            this.props.auth.updateMetadata(this.meta);
        }
    }
    handleChange(key, value) {
        this.meta[key] =  value;
    }
    render() {
        return (
            <div className="backdrop bg-dark">
                <div className="register card">
                    <p className="register-info">First, we just need to collect some information from you.</p>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name</label>
                        <input className="form-control" id="nameInput" placeholder="First Last" 
                                onChange={evt => this.handleChange("name", evt.currentTarget.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idInput">Employee ID</label>
                        <input className="form-control" id="idInput" placeholder="If applicable"
                                onChange={evt => this.handleChange("user_id", evt.currentTarget.value)}/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="hrCheck" value="isHr"
                                onChange={evt => this.handleChange("isHr", evt.currentTarget.checked)}/>
                        <label className="form-check-label" htmlFor="hrCheck">HR Employee</label>
                    </div>
                    <div className="btn-div">
                        <button className="btn btn-primary" onClick={() => this.updateUser()}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;