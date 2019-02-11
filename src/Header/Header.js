import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h3>workSafe</h3>
                </div>
                {/* <div className="navbar">
                    <p className="link">Home</p>
                    <p className="link">Dashboard</p>
                    <p className="link selected">About</p>
                    <p className="link">Profile</p>
                </div> */}
            </div>
        )
    }
}

export default Header;