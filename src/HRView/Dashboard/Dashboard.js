import React from 'react';
import './Dashboard.scss'
import tableau from "tableau-api";

class Dashboard extends React.Component {

    componentDidMount() {
        this.initViz()
    }

    initViz() {
        const vizUrl = "https://public.tableau.com/views/worksafeDashboard/Dashboard1?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link"
        const vizContainer = this.vizContainer;  
        let viz = new window.tableau.Viz(vizContainer, vizUrl)

    }
    render() {
        return (
            <div className="mainDashboard" ref={(div) => { this.vizContainer = div }}>  
            </div> 
        )
    }
}

export default Dashboard;

// https://public.tableau.com/views/CapstoneFinalDashboard_15592397956290/Dashboard1?:embed=y&:display_count=yes&:origin=viz_share_link
// https://public.tableau.com/views/capstone_15588227393440/workSafeDashboard?:embed=y&:display_count=yes&:origin=viz_share_link