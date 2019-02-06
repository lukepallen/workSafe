import React from 'react';
import './Divider.scss';

class Divider extends React.Component {
    render() {
        return (
            <div className="divider">
                <div className="cornerBorder topLeft"></div>
                <div className="dividerText">
                    <p>{this.props.fact}</p>
                </div>
                <div className="cornerBorder botRight"></div>
            </div>
        )
    }
}

export default Divider;