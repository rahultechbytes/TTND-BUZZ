import React, {Component} from 'react';

class Header extends Component {
    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render() {
        return (
            <header>
                <nav>
                    <button onClick={this.logout}>Logout</button>
                </nav>
            </header>
        )
    }
}

export default Header;