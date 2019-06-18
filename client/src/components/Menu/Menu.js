import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './menuStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
                    <li className="nav-item">
                        <Link to="/dashboard/resolve" className="nav-link">
                             Resolve {rightArrow}
                        </Link>
                    </li>
                </ul>


            </div>
        )
    }
}

export default Menu
