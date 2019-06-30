import React, { Component } from 'react';
import './LoginStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import ttnd from '../../assets/images/ttnd.jpg'
import {BASE_URL} from '../../constants/urlConstants';
class Login extends Component {

    render() {
        const googleIcon = <FontAwesomeIcon icon={faGoogle} />
        return (
            <React.Fragment>
                <div className="BgImage">
                    <div className="card text-center" style={{ width: '18rem' }}>
                        <img src={ttnd} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Create Your Own Buzz</h5>
                            <a href={`${BASE_URL}/auth/google`} className="btn">
                                {googleIcon}

                                <p>   Sign in with gmail</p>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Login