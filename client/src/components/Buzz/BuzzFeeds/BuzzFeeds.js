import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getBuzz, clearBuzz } from '../../../action/buzz.action'
import BuzzThreads from '../BuzzThreads/BuzzThreads';
import InfiniteScroll from 'react-infinite-scroller';
import './BuzzFeedStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

class BuzzFeeds extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         skip: 0,
    //         filter: "Most Recent"
    //     }
    // }

    // componentDidMount() {
    //     this.props.getBuzz(0, this.state.filter);   //Initial skip = 0 and filter = most recent buzz
    // }

    // handleOnChange = (event) => {
    //     this.setState({
    //         filter: event.target.value,
    //         skip: 0
    //     }, () => {
    //         this.props.getBuzz(this.state.skip, this.state.filter);
    //     })
    // }

    // loadFunc = () => {
    //     setTimeout(() => {
    //         this.setState({
    //             skip: this.state.skip + 5
    //         }, () => {
    //             this.props.getBuzz(this.state.skip, this.state.filter);
    //         })
    //     }, 500);
    // }

    render() {
        const filterbtn = <FontAwesomeIcon icon={faFilter} />
        const { emailId } = this.props.loggedInUser;
        const userFeeds = this.props.userFeeds;
        const skip = this.props.skip;
        return (
            <div>
                <div className='filtercategory' onChange={()=>this.props.handleOnChange(event)}>
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
                    loadMore={()=>{this.props.loadFunc()}}
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
                                    postDelete={this.props.postDelete}
                                    postLike= {this.props.postLike}
                                    postDislike={this.props.postDislike} 
                                />
                            )
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         // userFeeds: state.buzzReducer.buzzfeed,
//         // loginUserData: state.userReducer.userData
//     }
// }

// const mapDispatchToProps = {
//     getBuzz,
//     clearBuzz
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeeds)
export default BuzzFeeds;
