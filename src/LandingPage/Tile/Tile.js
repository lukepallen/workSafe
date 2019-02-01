import React from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div>
                <p>Heyyy look at me I'm a tile</p>
                <img src={this.props.imgSrc} alt="tile"></img>
            </div>
        )
    }
}

export default Tile;