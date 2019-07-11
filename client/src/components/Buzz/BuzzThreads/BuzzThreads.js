import React from 'react'
import moment from 'moment';
import './buzzthreadStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { deleteAlert } from '../../../utils/actionAlert'

const BuzzThreads = (props) => {

    const likeFn = () => {
        const buzzId = props.feeds._id;
        props.postLike(buzzId);
    }
    const dislikeFn = () => {
        const buzzId = props.feeds._id;
        props.postDislike(buzzId);
    }
    const onDelete = () => {
        const buzzId = props.feeds._id;

        let val = deleteAlert();
        val.then(result => {
            if (result.value) {
                props.postDelete(buzzId)
            }
        })
    }
    const checkUserLike = (id, like) => {

        const liked = like.find((item) => (item.userId === id));
        return liked ? 'liked' : ''
    }
    const checkUserDislike = (id, dislike) => {
        const disliked = dislike.find((item) => (item.userId === id));
        return disliked ? 'disliked' : ''
    }

    const removeIcon = <FontAwesomeIcon icon={faTimes} />
    const likeBtn = <FontAwesomeIcon icon={faThumbsUp} />
    const unlikeBtn = <FontAwesomeIcon icon={faThumbsDown} />
    const { loginUser } = props
    const { username, emailId, category, description, attachment, createdAt, Like, dislike, thumbNail } = props.feeds;
    const liked = checkUserLike(loginUser, Like);
    const disliked = checkUserDislike(loginUser, dislike);

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
                        loginUser === emailId ? <span onClick={onDelete} className='deleteicon'>{removeIcon}</span> : null
                    }
                </div>
            </div>
            <hr className="headerBorder" />
            <div className='buzzContentContainer'>
                <div className='buzzContent'>
                    {description}
                </div>
                <div className='uploadedimg'>
                    <img src={attachment} alt='' role='presentation' />
                </div>
            </div>
            <div className='buzzFooter'>
                <span className={`likeicon ${liked}`} onClick={likeFn}>{likeBtn}&nbsp;{Like.length}</span>
                <span className={`unlikeicon ${disliked}`} onClick={dislikeFn}>{unlikeBtn}&nbsp;{dislike.length}</span>
            </div>
        </div>
    )
}

export default BuzzThreads;