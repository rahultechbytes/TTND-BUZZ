import React, { Component } from 'react'
import { connect } from 'react-redux';
import ComplaintForm from '../ComplaintForm/ComplaintForm'
import ComplaintList from '../ComplaintList/ComplaintList';
import { showComplaintList } from '../../../action/complaint.action'
import IssueIdModal from '../../IssueId/IssueId';

class ComplaintManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "All Complaints",
            showModal: false,
        }
    }

    componentDidMount() {
        this.props.showComplaintList(this.state.filter);
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value
        }, () => {
            this.props.showComplaintList(this.state.filter);
        })
    }

    showIssueIdModal = (complaintDetail) => {
        this.setState({
            showModal: true,
            complaintDetail: complaintDetail
        })

    }

    onModalClose=()=>{
        this.setState({
            showModal:false
        })
    }
    render() {
        return (
            <div>
                <ComplaintForm
                    filter={this.state.filter}
                />
                <ComplaintList
                    list={this.props.list}
                    handleOnChange={this.handleOnChange}
                    filter={this.state.filter}
                    role={this.props.role}
                    showIssueIdModal={this.showIssueIdModal}
                />
                {this.state.showModal && <IssueIdModal onClose={this.onModalClose}  complaintDetail={this.state.complaintDetail}/> }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.complaintReducer.complaintList,
        role: state.userReducer.userData.role
    }
}

const mapDispatchToProps = {
    showComplaintList
}
export default connect(mapStateToProps, mapDispatchToProps)(ComplaintManager)
