import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Register';

export default () => <>
    <Route path="/" exact component={Login} />
    <Route path="/registration" exact component={Registration} />
</>