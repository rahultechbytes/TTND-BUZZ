import React from 'react'
import BuzzThreads from '../BuzzThreads/BuzzThreads';
import InfiniteScroll from 'react-infinite-scroller';
import './BuzzFeedStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const BuzzFeeds = (props) => {

    const filterbtn = <FontAwesomeIcon icon={faFilter} />
    const { emailId } = props.loggedInUser;
    const userFeeds = props.userFeeds;
    const skip = props.skip;
    
    return (
        <div>
            <div className='filtercategory' onChange={() => props.handleOnChange(event)}>
                <span className='filtericon'>{filterbtn}</span>
                <select id='buzz-filter' className="buzzFilter" name="filter">
                    <option value="Most Recent">Most Recent Buzz</option>
                    <option value="Activity">Activity Buzz</option>
                    <option value="Lost and Found">Lost and Found Buzz</option>
                    <option value="My Buzz">My Buzz</option>
                </select>
            </div>
            <InfiniteScroll
                pageStart={0}
                loadMore={() => { props.loadFunc() }}
                hasMore={skip < userFeeds.length}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <div>
                    {userFeeds.map((data, index) => {
                        return (
                            <BuzzThreads
                                feeds={data}
                                loginUser={emailId}
                                key={index}
                                postDelete={props.postDelete}
                                postLike={props.postLike}
                                postDislike={props.postDislike}
                            />
                        )
                    })}
                </div>
            </InfiniteScroll>

        </div>
    )
}

export default BuzzFeeds;
