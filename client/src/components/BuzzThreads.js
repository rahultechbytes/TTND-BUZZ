import React, { Component } from 'react'

class BuzzThreads extends Component {

    // handleOnChange = ()=>{
    //     localStorage.getItem("token")
    // }
    render() {
        console.log("threads", this.props)
        const { category, description, attachment, createdAt, Like, dislike } = this.props.feeds;
        return (
            <div>
                <ul>
                    <li>{category}</li>
                    <li>{description}</li>
                    <li><img src={attachment} height={'200px'} alt='' role='presentation'/></li>
                    <li>{createdAt}</li>
                    {/* <li onClick={this.handleOnChange}>Like:{Like.length}</li> */}
                    <li onClick={this.handleOnChange}>Like:{Like.length}</li>
                    <li>Dislike:{dislike.length}</li>
                </ul>
                <hr />
            </div>
        )
    }
}

export default BuzzThreads
