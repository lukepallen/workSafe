import React from 'react';
import './Tile.scss'

class Tile extends React.Component {
    getPos() {
        switch(this.props.pos) {
            case 0:
                return "right";
            case 1:
                return "center";
            case 2:
                return "left";
            default:
                return "right";
        }
    }
    render() {
        return (
            <div className="tile">
                <img className="tileImage" src={this.props.imgSrc} alt="tile"></img>
                <div className={"text " + this.getPos()}>
                    <p>{this.props.text ? this.props.text : 
                        "Some placeholder text that will be changed down the road"}</p>
                </div>
            </div>
        )
    }
}

export default Tile;