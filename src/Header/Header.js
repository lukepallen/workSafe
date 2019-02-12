import React from 'react';
import './header.scss';
import {NavLink} from 'react-router-dom';
import {ROUTES} from "../constants";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">
                    <h3>workSafe</h3>
                </div>
                <div className="navbar">
                    <NavLink to={ROUTES.home} activeClassName="selected">Home</NavLink>
                    <NavLink exact={true} to={ROUTES.dashboard} activeClassName="selected">Dashboard</NavLink>
                    <NavLink to={ROUTES.landing} activeClassName="selected">About</NavLink>
                    <NavLink to={ROUTES.profile} activeClassName="selected">Profile</NavLink>
                </div>
            </div>
        )
    }
}

export default Header;