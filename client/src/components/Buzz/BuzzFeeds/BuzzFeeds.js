import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBuzz } from '../../../action/buzz.action'
import BuzzThreads from '../BuzzThreads/BuzzThreads';
import InfiniteScroll from 'react-infinite-scroller';
import './BuzzFeedStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export class BuzzFeeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skip: 0,
            filter: "Most Recent"
        }
    }
    componentDidMount() {
        this.props.getBuzz(0);   //skip = 0
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    loadFunc = () => {
        setTimeout(() => {
            this.setState({
                skip: this.state.skip + 5
            }, () => {
                this.props.getBuzz(this.state.skip);
            })
        }, 500);
    }

    render() {
        // console.log("state",this.props.userFeeds);
        const filterbtn = <FontAwesomeIcon icon={faFilter} />
        const { emailId } = this.props.loginUserData;
        console.log("skip", this.state.skip);
        console.log("buzzfeedssssss", this.props.userFeeds.length)
        return (
            <div>
                <div className='filtercategory' onChange={this.handleOnChange}>
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
                    loadMore={this.loadFunc}
                    hasMore={this.state.skip < this.props.userFeeds.length}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <div>
                        {this.props.userFeeds.map((data, index) => {
                            if (this.state.filter === "Most Recent") {
                                return (
                                    <BuzzThreads feeds={data} loginUser={emailId} key={index} />
                                )
                            } else if (this.state.filter === data.category) {
                                return (
                                    <BuzzThreads feeds={data} loginUser={emailId} key={index} />
                                )
                            } else if (this.state.filter === "My Buzz") {
                                if (data.emailId === emailId) {
                                    return (
                                        <BuzzThreads feeds={data} loginUser={emailId} key={index} />
                                    )
                                }

                            }
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userFeeds: state.buzzReducer.buzzfeed,
        loginUserData: state.userReducer.userData
    }
}

const mapDispatchToProps = {
    getBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeeds)
