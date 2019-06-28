import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postLike, postDislike, postDelete } from '../../../action/buzz.action'
import moment from 'moment';

class BuzzThreads extends Component {

    like = () => {
        const buzzId = this.props.feeds._id;
        // console.log("buzzId", buzzId);
        this.props.postLike(buzzId);
    }
    dislike = () => {
        const buzzId = this.props.feeds._id;
        // console.log("buzzId", buzzId);
        this.props.postDislike(buzzId);
    }
    onDelete = () => {
        const buzzId = this.props.feeds._id;
        this.props.postDelete(buzzId)
    }

    render() {
        const { loginUser } = this.props
        const { username, emailId, category, description, attachment, createdAt, Like, dislike, thumbNail } = this.props.feeds;
        return (
            <div>
                <ul>
                    <li><img src={thumbNail} height={'50px'} width={'50px'} alt="" role='presentation' /></li>
                    <li>{username}</li>
                    <li>{emailId}</li>
                    <li>{category}</li>
                    <li>{description}</li>
                    <li><img src={attachment} height={'200px'} width={'100px'} alt='' role='presentation' /></li>
                    <li>{moment(createdAt).fromNow()}</li>
                    <li onClick={this.like}>Like:{Like.length}</li>
                    <li onClick={this.dislike}>Dislike:{dislike.length}</li>
                    {loginUser === emailId ? <button onClick={this.onDelete}>delete</button> : null}
                </ul>
                <hr />
            </div>
        )
    }
}


const mapDispatchToProps = {
    postLike,
    postDislike,
    postDelete
}

export default connect(null, mapDispatchToProps)(BuzzThreads);