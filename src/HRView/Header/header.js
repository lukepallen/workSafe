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
                <div className="header-title">
                    <h1>workSafe</h1>
                </div>
                <div className="tabs">
                    <NavLink to={ROUTES.hrPage} activeClassName="selected" className="link">Pending Reports</NavLink>
                    <NavLink exact={true} to={ROUTES.dashboard} activeClassName="selected" className="link">Dashboard</NavLink>
                    {/* <NavLink to={ROUTES.landing} activeClassName="selected" className="link">About</NavLink> */}
                    <NavLink to={ROUTES.hrResolved} activeClassName="selected" className="link">Resolved Reports</NavLink>
                </div>
            </div>
            // <div>
            //     <h1> WorkSafe </h1>
            //         <div className="tabs">
            //             <button onClick={this.showTable} className="tab">
            //                 <img src={reports} alt="reports" />
            //             </button>
            //             <button className="tab" onClick={this.hideTable}>
            //                 <img src={validated} alt="validated" />
            //             </button>
            //             <button className="tab" onClick={this.hideTable}>
            //                 <img src={validated} alt="validated" />
            //             </button>
            //         </div>
            // </div>
        );
    }

    showTable() {
        document.getElementById("table1").style.display="block";
        document.getElementById("table2").style.display="none";
    }

    hideTable() {
        document.getElementById("table1").style.display="none";
        document.getElementById("table2").style.display="block";
    }
}