import React from 'react';
import Tile from './Tile/Tile'
import Divider from './Divider/Divider';
import './LandingPage.scss'
import image1 from '../img/placeholder_image1.jpg';
import image2 from '../img/placeholder_image2.jpg';
// import image3 from '../img/placeholder_image345.jpg';
// import image4 from '../img/extra_placeholder_image.jpg';

class LandingPage extends React.Component {
    missionStatement = "Harassment in the workplace has increased over the past decade despite continued " +
            "efforts to implement inclusive policies and practices. One aspect of this is company’s failure " + 
            "to implement efficient reporting mechanisms that instill confidence that they will diligently " +
            "evaluate and exact justice for any given report."
    solution = "Our solution is an enterprise wide reporting system that allows employees to privately report " +
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
                <Divider fact={"teamInfo"}></Divider>
                <Tile imgSrc={image2} text={this.solution} pos={this.putPos()}></Tile>
                <Divider fact="contactInfo"></Divider>
                {/* <Tile imgSrc={image3} pos={this.putPos()}></Tile>
                <Divider fact=></Divider>
                <Tile imgSrc={image4} pos={this.putPos()}></Tile>
                <Divider fact=></Divider> */}
                <div className="footer">
                    <p>Created by Ally Picker, Anukriti Goyal, Luke Allen, and Sagar Surana as part of the University of Washington iSchool</p>
                    <p>For questions or additional information, contact <span style={{'text-decoration': 'underline'}}>Arp32@uw.edu</span></p>
                </div>
            </div>
        )
    }
}

export default LandingPage;