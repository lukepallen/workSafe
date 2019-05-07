import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';
import {ROUTES} from "../../constants";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h3>workSafe</h3>
                </div>
                <div className="navbar">
                    <NavLink to={ROUTES.empReport} activeClassName="selected" className="link">Report</NavLink>
                    {/* <NavLink exact={true} to={ROUTES.dashboard} activeClassName="selected" className="link">Dashboard</NavLink> */}
                    {/* <NavLink to={ROUTES.landing} activeClassName="selected" className="link">About</NavLink> */}
                    <NavLink to={ROUTES.profile} activeClassName="selected" className="link">Profile</NavLink>
                </div>
            </div>
        )
    }
}

export default Header;