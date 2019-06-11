import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li>
                        <Link to="/dashboard/buzz">
                            Buzz
                            </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/complaints">
                            Complaint
                            </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/resolve">
                            Resolve
                            </Link>
                    </li>
                </ul>


            </div>
        )
    }
}

export default Menu
