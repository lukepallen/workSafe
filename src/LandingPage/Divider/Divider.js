import React from 'react';
import './Divider.scss';

class Divider extends React.Component {
    render() {
        return (
            <div className="divider">
                <div className="cornerBorder topLeft"></div>
                {this.props.fact === "teamInfo" ? 
                <div className="dividerText">
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
                            Anukriti Goyal – Her passion lies in the power of data science to change 
                            processes and bring people together.
                        </li>
                        <li>
                            Luke Allen – An avid software developer, he loves finding and solving unique problems using technology 
                        </li>
                        <li>
                            Sagar Surana – As a back end developer, he hopes to build scalable systems that are 
                            efficiently built and help to improve people’s lives
                        </li>
                    </ul>
                </div>
                :
                <div className="dividerText">
                    <p>
                        This is a placeholder fact for user research and data on MVP 
                    </p>
                </div>}
                <div className="cornerBorder botRight"></div>
            </div>
        )
    }
}

export default Divider;