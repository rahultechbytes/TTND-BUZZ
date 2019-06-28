import React from 'react'
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h2>Are you Lost?!</h2>
            <center><Link to="/">Return to Home Page</Link></center>
        </div>
    )
}

export default NoMatch
