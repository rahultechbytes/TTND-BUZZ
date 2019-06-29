import React from 'react';
import './BannerStyle.css'
import logo from '../../assets/images/logo.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="headerLogo">
                <img src={logo} alt=""/>
            </div>
            <h2>
                posting your thoughts
                <br/>
                never been so easy..
            </h2>
        </div>
    )
}

export default Banner