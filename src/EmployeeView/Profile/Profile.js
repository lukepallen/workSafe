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
        this.user = undefined;
    }
    componentDidMount() {
        this.props.auth.user.subscribe(user => {
            this.user = user;
            this.fetchData();
        })
    }
    fetchData() {
        this.firebase.get(this.user.user_metadata.name).then(data => {
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
                        {
                            this.state.rows.length !== 0 ? 
                            this.state.rows.map(row => 
                                <Card desc={row.description} time={row.datetime} status={row.status}></Card>
                            ) :
                            <p>Go to the report tab to file a report</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;