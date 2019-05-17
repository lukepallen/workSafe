import React from 'react';
import './Dashboard.scss'
import tableau from "tableau-api";

class Dashboard extends React.Component {

    componentDidMount() {
        this.initViz()
    }

    initViz() {
        const vizUrl = "https://public.tableau.com/views/workSafe/workSafeDashboard?:embed=y&:display_count=yes&:origin=viz_share_link"
        const vizContainer = this.vizContainer;  
        let viz = new window.tableau.Viz(vizContainer, vizUrl)

    }

    render() {
        return (
            <div ref={(div) => { this.vizContainer = div }}>  
            </div> 
        )
    }
}

export default Dashboard;