import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postLike, postDislike, postDelete } from '../../../action/buzz.action'
import moment from 'moment';
import './buzzthreadStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
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
        const removeIcon = <FontAwesomeIcon icon={faTimes} />
        const like = <FontAwesomeIcon icon={faThumbsUp} />
        const unlike = <FontAwesomeIcon icon={faThumbsDown} />


        const { loginUser } = this.props
        const { username, emailId, category, description, attachment, createdAt, Like, dislike, thumbNail } = this.props.feeds;
        return (
            <div className='buzzContainer'>
                <div className='buzzHeader'>
                    <div className='nameActivity'>
                        <div className='userimgcontainer'>
                            <img src={thumbNail} alt="" role='presentation' className='userimg' />
                        </div>
                        <div className='usernameactivity'>
                            <span className='username'>{username}</span>
                            <span className='buzzCategory'>
                                <span className="badge badge-pill badge-primary">{category}</span>
                            </span>
                            <div className='timestamp'>
                                {moment(createdAt).fromNow()}
                            </div>
                        </div>
                    </div>

                    <div className='deleteBuzz'>
                        {
                            loginUser === emailId ? <span onClick={this.onDelete} className='deleteicon'>{removeIcon}</span> : null
                        }
                    </div>
                </div>
                <hr className="headerBorder"/>
                <div className='buzzContentContainer'>
                    <div className='buzzContent'>
                        {description}
                    </div>
                    <div className='uploadedimg'>
                        <img src={attachment}  alt='' role='presentation' />
                    </div>
                </div>
                <div className='buzzFooter'>
                    <span className='likeicon' onClick={this.like}>{like}&nbsp;{Like.length}</span>
                    <span className='unlikeicon' onClick={this.dislike}>{unlike}&nbsp;{dislike.length}</span>
                </div>
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