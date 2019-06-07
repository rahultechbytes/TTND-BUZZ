import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Token from './utils/Token';
import Buzz from './components/Buzz/Buzz'


class Routes extends Component {

    render() {
        console.log('local storage value', localStorage.getItem("token"));
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

                <Route
                    path='/buzz'
                    component={Buzz}
                />

                {/* <PrivateRoute
                    isLogin={localStorage.getItem("token") ? true : false}
                    path='/buzz'
                    component={Buzz}
                /> */}

                <Route
                    path='/logout'
                    component={Logout}
                />

            </Router>
        )
    }
}

export default Routes

const PrivateRoute = ({ component: Component, isLogin, ...restProps }) => {
    
    console.log("local sorage ",localStorage.getItem("token"));
    // isLogin = localStorage.getItem("token") ? true : false;
    console.log("islogin",isLogin);
    return(
        <Route
            {...restProps}
            render={(props) => isLogin ? <Component {...props}/> : <Redirect to={'/'} /> }
        />
    )
}