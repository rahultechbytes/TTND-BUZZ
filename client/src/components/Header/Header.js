import React, { Component } from 'react';
import './HeaderStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { getUser } from '../../action/user.action';
import { connect } from 'react-redux'

class Header extends Component {
    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const { thumbnail, username, department, emailId, role } = this.props.profile
        const signOut = <FontAwesomeIcon icon={faSignOutAlt} />
        return (
            <header className="header text-right">
                {/* modal */}
                <button type="button" className="img_Btn" data-toggle="modal" data-target="#exampleModal">
                    <img className="rounded-circle" src={thumbnail} alt="" />
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{username}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>

                            </div>
                            <div className="modal-body">
                                <img src={thumbnail} alt="" />
                                <h6>{emailId}</h6>
                                <h6>{department}</h6>
                                <h6>{role}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal */}
                <a className="logout" onClick={this.logout}>
                    Logout
                    &nbsp;
                    {signOut}
                </a>

            </header>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("profile: ", state);
    return { profile: state.userReducer.userData }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);