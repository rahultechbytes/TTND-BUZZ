import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './menuStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

class Menu extends Component {
    render() {
        const rightArrow = <FontAwesomeIcon icon={faChevronRight} />
        return (
            <div>

                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/dashboard/buzz" className="nav-link">
                            Buzz {rightArrow}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/complaints" className="nav-link">
                            Complaint {rightArrow}
                        </Link>
                    </li>
                    {
                        (this.props.role === 'admin') ?
                            <li className="nav-item">
                                <Link to="/dashboard/resolve" className="nav-link">
                                    Resolve {rightArrow}
                                </Link>
                            </li>
                        : null
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
