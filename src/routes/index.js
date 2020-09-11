import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Forgot from '../views/Forgot'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/signin" component={SignIn} path="/signin" />
      <Route path="/signup" component={SignUp} path="/signup" />
      <Route path="/forgot" component={Forgot} path="/forgot" />
    </Switch>
  )
}