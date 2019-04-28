import React from 'react';
import './Profile.scss'
import FirebaseService from '../../Firebase/firebaseService';
import Card from './Card/Card';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: [],
        };
        this.firebase = new FirebaseService();
        this.fetchData();
    }
    fetchData() {
        this.firebase.get("Jane Doe").then(data => {
            console.log(data);
            let rows = data.map(row => {
                let content
                Object.keys(row).forEach(key => content = row[key])
                return content
            });
            this.setState({"rows": rows});
        })
    }
    render() {
        return (
            <div className="profile">
                <div className="reports">
                    <p className="label">Reports Filed</p>
                    <div>
                        {this.state.rows.map(row => 
                            <Card desc={row.description} time={row.datetime} status={row.status}></Card>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;