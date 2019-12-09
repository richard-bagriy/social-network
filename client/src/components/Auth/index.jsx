import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Register';


class Auth extends React.Component {
    
    render() {
        return <>
            <Redirect to="/login" />
            <Route path="/login" exact component={Login} />
            <Route path="/registration" exact component={Registration} />
        </>
    }

}

export default Auth