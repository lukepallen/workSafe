import React from 'react';
import './Card.scss'
import moment from 'moment';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <p className="label">Status:</p>
                <p className="content">{this.props.status}</p>
                <p className="label">Description:</p>
                <p className="content">{this.props.desc}</p>
                <p className="label">Date and Time of Occurence:</p>
                <p className="content">{moment(this.props.datetime).format("LLLL")}</p>
            </div>
        )
    }
}

export default Card;