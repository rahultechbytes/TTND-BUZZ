import React, { Component } from 'react';
import './HeaderStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render() {
        const signOut = <FontAwesomeIcon icon={faSignOutAlt} />
        return (
            <header className="header text-right">
                <a className="logout" onClick={this.logout}>
                    Logout
                    &nbsp;
                    {signOut}
                </a>
            </header>
        )
    }
}

export default Header;