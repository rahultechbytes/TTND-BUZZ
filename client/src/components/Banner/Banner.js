import React from 'react';
import './BannerStyle.css'

const Banner = () => {
    // const onChange = () => {
    //     var path = window.location.pathname;

    //     if(path="/dashboard/buzz"){ return "posting your thoughts never been so easy"}
    //     else{return "rahuljain"}
    // }
    return (
        <div className="banner">
            <h2>
                posting your thoughts
                <br/>
                never been so easy..
            </h2>
        </div>
    )
}

export default Banner