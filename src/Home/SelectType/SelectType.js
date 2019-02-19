import React from 'react';
import {Link} from 'react-router-dom'
import {ROUTES} from '../../constants';
import './SelectType.scss'

class SelectType extends React.Component {
    render() {
        return (
            <div className="buttonDiv">
                <Link to={ROUTES.submit}><button className="btn btn-block">Employee</button></Link>
                {/* <Link to=><button className="btn btn-block">Human Resources</button></Link> */}
            </div>
        )
    }
}

export default SelectType;