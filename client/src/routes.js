import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import Token from './utils/Token';
import Buzz from './components/Buzz/Buzz'


class Routes extends Component {

    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/"
                    component={Login}
                />

                <Route
                    path='/token'
                    component={Token}
                />

                <PrivateRoute
                    path='/buzz'
                    component={Buzz}
                />


            </Router>
        )
    }
}

export default Routes

const PrivateRoute = ({ component: Component, ...restProps }) => {
    
    return(
        <Route
            {...restProps}
            render={(props) => localStorage.getItem('token') ? <Component {...props}/> : <Redirect to={'/'} /> }
        />
    )
}