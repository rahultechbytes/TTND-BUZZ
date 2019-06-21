import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBuzz } from '../../../action/buzz.action'
import BuzzThreads from '../BuzzThreads/BuzzThreads';
import InfiniteScroll from 'react-infinite-scroller';
import './BuzzFeedStyle.css';
export class BuzzFeeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skip: 0
        }
    }
    componentDidMount() {
        this.props.getBuzz(0);   //skip = 0
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
        const { emailId } = this.props.loginUserData;
        console.log("skip", this.state.skip);
        console.log("buzzfeedssssss", this.props.userFeeds.length)
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={this.state.skip < this.props.userFeeds.length}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <div>
                        {this.props.userFeeds.map((data, index) => {
                            return (
                                <BuzzThreads feeds={data} loginUser={emailId} key={index} />
                            )
                        })}
                    </div>
                </InfiniteScroll>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("********************", state.buzzReducer.buzzfeed);
    return {
        userFeeds: state.buzzReducer.buzzfeed,
        loginUserData: state.userReducer.userData
    }
}

const mapDispatchToProps = {
    getBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeeds)
