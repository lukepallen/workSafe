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
            <div className="tile parallax" style={{"backgroundImage": 'url(' + this.props.imgSrc + ')'}}>
                <div className={"text " + this.getPos()}>
                    {this.props.text ? 
                        <div> 
                            <p>{this.props.text[0]}</p> 
                            { this.props.text[1] ? <p><br></br>{this.props.text[1]}</p> : <span></span>}
                        </div>
                    : <p>Some placeholder text that will be changed down the road</p>
                    }
                </div>
            </div>
        )
    }
}

export default Tile;