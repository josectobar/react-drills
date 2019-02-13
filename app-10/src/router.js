import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Details from './Components/Details'
import Product from './Components/Products'

export default (
    <Switch>
        <Route path="/" exact component={Product}/>
        <Route path="/details/:id" component={Details}/>
    </Switch>
)