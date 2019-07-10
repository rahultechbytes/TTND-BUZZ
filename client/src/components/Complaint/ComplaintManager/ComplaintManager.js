import React, { Component } from 'react'
import { connect } from 'react-redux';
import ComplaintForm from '../ComplaintForm/ComplaintForm'
import ComplaintList from '../ComplaintList/ComplaintList';
import { showComplaintList } from '../../../action/complaint.action'

class ComplaintManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "All Complaints"
        }
    }

    componentDidMount() {
        this.props.showComplaintList();
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    render() {
        return (
            <div>
                <ComplaintForm />
                <ComplaintList
                    list={this.props.list}
                    handleOnChange={this.handleOnChange}
                    filter={this.state.filter}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { list: state.complaintReducer.complaintList }
}

const mapDispatchToProps = {
    showComplaintList
}
export default connect(mapStateToProps, mapDispatchToProps)(ComplaintManager)
