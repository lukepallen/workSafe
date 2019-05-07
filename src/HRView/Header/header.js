import React, { Component } from 'react';
import reports from '../images/reports.png';
import validated from '../images/validated.png'
import './header.css'
import {NavLink} from 'react-router-dom';
import {ROUTES} from "../../constants";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1>WORKSAFE</h1>
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