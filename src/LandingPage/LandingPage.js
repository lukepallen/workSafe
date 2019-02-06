import React from 'react';
import Tile from './Tile/Tile'
import Divider from './Divider/Divider';
import './LandingPage.scss'
import image1 from '../img/placeholder_image1.jpg';
import image2 from '../img/placeholder_image2.jpg';
import image3 from '../img/placeholder_image345.jpg';
import image4 from '../img/extra_placeholder_image.jpg';

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
                <Tile imgSrc={image1} text={this.missionStatement} pos={this.putPos()}></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
                <Tile imgSrc={image2} text={this.solution} pos={this.putPos()}></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
                <Tile imgSrc={image3} pos={this.putPos()}></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
                <Tile imgSrc={image4} pos={this.putPos()}></Tile>
                <Divider fact="This is a placeholder fact that will tell the user important info"></Divider>
                <div className="footer">
                    <p>Created by Ally Picker, Anukriti Goyal, Luke Allen, and Sagar Surana as part of the
                        University of Washington iSchool
                    </p>
                    <p>For questions or additional information, contact <span style={{'text-decoration': 'underline'}}>Arp32@uw.edu</span></p>
                </div>
            </div>
        )
    }
}

export default LandingPage;