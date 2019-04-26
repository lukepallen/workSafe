import React, { Component } from 'react';
import reports from '../images/reports.png';
import validated from '../images/validated.png'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1> WorkSafe </h1>
                    <div className="tabs">
                        <button onClick={this.showTable} className="tab">
                            <img src={reports} alt="reports" />
                        </button>
                        <button className="tab" onClick={this.hideTable}>
                            <img src={validated} alt="validated" />
                        </button>
                    </div>
            </div>
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