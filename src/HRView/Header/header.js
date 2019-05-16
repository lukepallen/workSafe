import React, { Component } from 'react';
import './header.scss'
import {NavLink} from 'react-router-dom';
import {ROUTES} from "../../constants";
import logo from './logo_transparent.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <img src={logo} alt="Logo" />;
                </div>
                <div className="tabs">
                    <NavLink to={ROUTES.hrPage} activeClassName="selected" className="link">Pending Reports</NavLink>
                    <NavLink exact={true} to={ROUTES.dashboard} activeClassName="selected" className="link">Dashboard</NavLink>
                    <NavLink to={ROUTES.hrResolved} activeClassName="selected" className="link">Resolved Reports</NavLink>
                </div>
            </div>
        );
    }
}