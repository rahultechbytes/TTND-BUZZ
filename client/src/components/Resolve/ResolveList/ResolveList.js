import React, { Component } from 'react'
import { showComplaintList, updateComplaint } from '../../../action/resolve.action';
import { connect } from 'react-redux'
import ComplaintThread from '../../ComplaintThread/ComplaintThread';
import './resolveListStyle.css'
import IssueIdModal from '../../IssueId/IssueId';


class ResolveList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "All Complaints",
            showModal: false
        }
    }
    componentDidMount() {
        this.props.showComplaintList(this.state.filter)
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value
        }, () => {
            this.props.showComplaintList(this.state.filter)
        })
    }

    showIssueIdModal = (complaintDetail) => {
        this.setState({
            showModal: true,
            complaintDetail: complaintDetail
        })

    }

    onModalClose = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className="table-container">
                <header className="table-header">
                    <span className="left">
                        {this.state.filter}
                    </span>
                    <span className="right">
                        <select name="filter" onChange={this.handleOnChange}>
                            <option value="All Complaints">All Complaints</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </span>
                </header>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr className="table-row">
                            <th scope="col">Department</th>
                            <th scope="col">Issue Id</th>
                            <th scope="col">Locked By</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((data, index) => {
                            return (
                                <ComplaintThread
                                    list={data}
                                    key={index}
                                    updateComplaint={this.props.updateComplaint}
                                    role={this.props.role}
                                    resolve={"true"}
                                    showIssueIdModal={this.showIssueIdModal}
                                />
                            )
                        })}
                    </tbody>
                </table>
                {this.state.showModal && <IssueIdModal onClose={this.onModalClose} complaintDetail={this.state.complaintDetail} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.resolveReducer.resolveList,
        role: state.userReducer.userData.role
    }
}

const mapDispatchToProps = {
    showComplaintList,
    updateComplaint
}

export default connect(mapStateToProps, mapDispatchToProps)(ResolveList)
