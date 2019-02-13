import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import Signup from './Components/Signup'
import details from './Components/details'

export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/details" component={details}/>
    </Switch>
)