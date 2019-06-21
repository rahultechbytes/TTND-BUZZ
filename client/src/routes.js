import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Token from './utils/Token';
import Dashboard from './components/Dashboard/Dashboard'
import NoMatch from './components/Error/NoMatch';

class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
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
                    <Route
                        // path='/404'
                        // exact={true}
                        component={NoMatch}
                    />
                    {/* <Redirect from='*' to='/404' /> */}

                </Switch>
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