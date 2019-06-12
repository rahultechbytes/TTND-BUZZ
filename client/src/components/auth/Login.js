import React, { Component } from 'react';
import './LoginStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

class Login extends Component {

    render() {

        const googleIcon = <FontAwesomeIcon icon={faGoogle} />
        return (
            <React.Fragment>
                <div className="BgImage">
                </div>
                {/* <div className="google-btn"> */}
                <a href="http://localhost:5000/auth/google" className="a-Btn">
                    <button className="btn">
                        {googleIcon}
                        &nbsp;
                        Sign in with gmail
                </button>
                </a>
                {/* </div> */}
            </React.Fragment>
        )
    }
}
export default Login