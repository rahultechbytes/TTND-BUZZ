import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { postLike } from '../../actions/buzz.action' 

class BuzzThreads extends Component {

    // like = ()=>{
    //     const buzzId = this.props.feeds._id;
    //     console.log("buzzId",buzzId);
    //     this.props.postLike(buzzId);
    // }

    render() {
        console.log("threads", this.props)
        const {username, emailId, category, description, attachment, createdAt, Like, dislike } = this.props.feeds;
        return (
            <div>
                <ul>
                    <li>{username}</li>
                    <li>{emailId}</li>
                    <li>{category}</li>
                    <li>{description}</li>
                    <li><img src={attachment} height={'200px'} width={'100px'} alt='' role='presentation'/></li>
                    <li>{createdAt}</li>
                    <li onClick={this.like}>Like:{Like.length}</li>
                    <li>Dislike:{dislike.length}</li>
                </ul>
                <hr />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log("mapStateToProps", state);
//     return { increaseLike: state.buzzReducer.buzzfeed}
// }

// const mapDispatchToProps = {
//     postLike
// }

export default BuzzThreads;