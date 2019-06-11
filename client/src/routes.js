import React, { Component } from 'react';
import {Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import Token from './utils/Token';
import Dashboard from './components/Dashboard/Dashboard'


class Routes extends Component {

    render() {
        return (
            <div>
            
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
                    path='/dashboard'
                    component={Dashboard}
                />
                </div>

        )
    }
}

export default Routes

const PrivateRoute = ({ component: Component, ...restProps }) => {

    return (
        <Route
            {...restProps}
            render={(props) => localStorage.getItem('token') ? <Component {...props} /> : <Redirect to={'/'} />}
        />
    )
}