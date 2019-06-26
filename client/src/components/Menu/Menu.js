import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './menuStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

class Menu extends Component {
    render() {
        console.log("role:",this.props.role);
        const rightArrow = <FontAwesomeIcon icon={faChevronRight} />
        return (
            <div>

                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="/dashboard/buzz" className="nav-link">
                            Buzz {rightArrow}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dashboard/complaints" className="nav-link">
                            Complaint {rightArrow}
                        </NavLink>
                    </li>
                    {
                        (this.props.role === 'admin') ?
                            <li className="nav-item">
                                <NavLink to="/dashboard/resolve" className="nav-link">
                                    Resolve {rightArrow}
                                </NavLink>
                            </li>: null
                    }
                </ul>


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { role: state.userReducer.userData.role }
}
export default connect(mapStateToProps, null)(Menu)
