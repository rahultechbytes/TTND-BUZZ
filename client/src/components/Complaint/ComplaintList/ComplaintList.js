import React, { Component } from 'react'
import { showComplaintList } from '../../../action/complaint.action';
import { connect } from 'react-redux'
import ComplaintThread from '../ComplaintThread/ComplaintThread';

class ComplaintList extends Component {

    componentDidMount() {
        this.props.showComplaintList();
    }
    render() {
        return (
            <div>
                {this.props.list.map((data, index) => {
                    return (
                        <ComplaintThread list={data} key={index} />
                    )
                })}
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
