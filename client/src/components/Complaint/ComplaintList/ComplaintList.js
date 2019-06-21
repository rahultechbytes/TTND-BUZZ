import React, { Component } from 'react'
import { showComplaintList } from '../../../action/complaint.action';
import { connect } from 'react-redux'
import ComplaintThread from '../ComplaintThread/ComplaintThread';
import InfiniteScroll from 'react-infinite-scroller';
class ComplaintList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skip: 0
        }
    }

    componentDidMount() {
        this.props.showComplaintList(0);
    }

    loadFunc = () => {
        setTimeout(() => {
            this.setState({
                skip: this.state.skip + 5
            }, () => {
                this.props.showComplaintList(this.state.skip);
            })
        }, 500);
    }
    render() {
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={this.state.skip < this.props.list.length}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {this.props.list.map((data, index) => {
                        return (
                            <ComplaintThread list={data} key={index} />
                        )
                    })}
                </InfiniteScroll>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state of complaint reducer get", state.complaintReducer.complaintList);
    return { list: state.complaintReducer.complaintList }
}

const mapDispatchToProps = {
    showComplaintList
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintList)
