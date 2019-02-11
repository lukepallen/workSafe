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
    workplaceFact = "Harassment in the workplace has increased over the past decade despite continued " +
            "efforts to implement inclusive policies and practices. One aspect of this is company’s failure " + 
            "to implement efficient reporting mechanisms that instill confidence that they will diligently " +
            "evaluate and exact justice for any given report."
    solution = "workSafe is an easy tool to report workplace harassment. Designed to capture both " +
            "first hand and bystander reports this tool allows companies to quickly validate and address " +
            "reports of harassment. Our tool brings greater visibility to the reporting process for the employee.";
    solFact = "Our solution is an enterprise wide reporting system that allows employees to privately report " +
            "any identity based harassment or generalized aggressive behavior. Both HR personnel and reporters " +
            "can track how their report is being processed via this tool, adding a layer of accountability that " +
            "was not present prior to this tool. "
    pos = -1;
    putPos() {
        this.pos += 1;
        if (this.pos > 3) {
            this.pos = 0;
        }
        console.log(this.pos)
        return this.pos;
    }

    render() {
        return (
            <div>
                <Tile imgSrc={image1} text={this.missionStatement} pos={this.putPos()}></Tile>
                <Divider fact={this.workplaceFact}></Divider>
                <Tile imgSrc={image2} text={this.solution} pos={this.putPos()}></Tile>
                <Divider fact={this.solFact}></Divider>
                {/* <Tile imgSrc={image3} pos={this.putPos()}></Tile>
                <Divider fact=></Divider>
                <Tile imgSrc={image4} pos={this.putPos()}></Tile>
                <Divider fact=></Divider> */}
                <div className="footer">
                    <p>
                        OUR TEAM:  We are all Seniors in the Informatics program. 
                        Our specialties are Data Science, Product Development and Interaction Design. 
                    </p>
                    <ul>
                        <li>
                            Ally Picker -  With a love of design and innovative product development, she enjoys
                            learning new methods for solving old problems as well as using technology to advocate for others.
                        </li>
                        <li>
                            Sagar Surana – As a back end developer, he hopes to build scalable systems that are 
                            efficiently built and help to improve people’s lives
                        </li>
                        <li>
                            Anukriti Goyal – Her passion lies in the power of data science to change 
                            processes and bring people together.
                        </li>
                        <li>
                            Luke Allen – An avid software developer, he loves finding and solving unique problems using technology 
                        </li>
                    </ul>
                    <p>
                        Researchers, workers, Human Resources experts, and individuals who would be willing to test the software 
                        or answer exploratory design questionnaires feel free to contact the team at 
                        <span style={{'text-decoration': 'underline'}}>Arp32@uw.edu</span>! 
                    </p>
                </div>
            </div>
        )
    }
}

export default LandingPage;