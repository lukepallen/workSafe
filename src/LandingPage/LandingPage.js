import React from 'react';
import Tile from './Tile/Tile'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Tile imgSrc="/img/placeholder_image1.jpg"></Tile>
                <Tile imgSrc="/img/placeholder_image2.jpg"></Tile>
                <Tile imgSrc="/img/placeholder_image345.jpg"></Tile>
                <Tile imgSrc="/img/extra_placeholder_image.jpg"></Tile>
            </div>
        )
    }
}

export default LandingPage;