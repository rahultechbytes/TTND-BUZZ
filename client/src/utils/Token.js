import React from 'react';

class Token extends React.Component {

    componentDidMount() {
        // console.log("Query+++++++++++", (this.props.location.search).split('=')[1]);
        const token = (this.props.location.search).split('=')[1];
        localStorage.setItem("token", token);
        // console.log("Token is here =>>>>", value);
        this.props.history.push('/dashboard/buzz');
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Token;