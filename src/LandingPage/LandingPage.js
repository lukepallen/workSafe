import React from 'react';
import Tile from './Tile/Tile'
import Divider from './Divider/Divider';

class LandingPage extends React.Component {
    missionStatement = "Our goal is to provide companies with a way to accurately capture and " +
            "track reports of harassment within their companies. We hope to facilitate active " +
            "communication between employers and their employees around the issue of workplace harassment.";
    solution = "{Product Name} is an easy tool to report workplace harassment. Designed to capture both " +
            "first hand and bystander reports this tool allows companies to quickly validate and address " +
            "reports of harassment. Our tool brings greater visibility to the reporting process for the employee.";
    pos = -1;
    putPos() {
        this.pos += 1;
        if (this.pos > 3) {
            this.pos = 0;
        }
        return this.pos;
    }

    render() {
        return (
            <div>
                <Tile imgSrc="/img/placeholder_image1.jpg" text={this.missionStatement} pos={this.putPos()}></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
                <Tile imgSrc="/img/placeholder_image2.jpg" text={this.solution}></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
                <Tile imgSrc="/img/placeholder_image345.jpg"></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
                <Tile imgSrc="/img/extra_placeholder_image.jpg"></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
            </div>
        )
    }
}

export default LandingPage;