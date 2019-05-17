import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';
import {ROUTES} from "../../constants";
import logo from './anothaone.png'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="navbar">
                    <NavLink to={ROUTES.empReport} activeClassName="selected" className="link">Report</NavLink>
                    <NavLink to={ROUTES.profile} activeClassName="selected" className="link">Profile</NavLink>
                </div>
            </div>
        )
    }
}

export default Header;