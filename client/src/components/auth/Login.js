import React, { Component } from 'react';
import './LoginStyle.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import icon from '../../assets/images/googleIcon.svg'

class Login extends Component {

    render() {
        
        // const element = <FontAwesomeIcon icon={icon.google} />
        return (
            <div className="BgImage">
                <div className="google-btn">
                    <a href="http://localhost:5000/auth/google">
                        <button>
                         Sign in with gmail
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}
export default Login