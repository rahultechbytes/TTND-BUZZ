import React from 'react'
import { Link } from 'react-router-dom';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

const divStyle = {
    padding: '8em 8em 19em 8em',
    height: '100%',
    backgroundColor: 'skyBlue'
}
const h1Style = {
    fontWeight: '600'
}
const spanStyle = {
    color: 'green'
}
const homePage = {
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '3em'
}
const NoMatch = () => {
    return (
        <div style={divStyle}>
            <h1 style={h1Style}>
                <center>
                    <span style={spanStyle}>Oops! </span>
                    This is awkward... You are looking for something that doesn't actually exist.
                </center>
            </h1>
            <center>
                <img src="" alt="" />
            </center>
            <center style={homePage}><Link to="/dashboard/buzz">Return to Home Page</Link></center>
        </div>
    )
}


export default NoMatch
