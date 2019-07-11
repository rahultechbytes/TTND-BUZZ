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
        this.props.showComplaintList(this.state.filter);
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value
        },()=>{
            this.props.showComplaintList(this.state.filter);
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
