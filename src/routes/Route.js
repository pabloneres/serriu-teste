import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper ({
  component: Component,
  isPrivate = false,
  path,
  ...rest
}) {
  const token = localStorage.getItem('token')

  if (!token && isPrivate) {
    return <Redirect to="/signin" />
  }

  if (token && path === '/signin') {
    return <Redirect to="/" />
  }


  return <Route {...rest} component={Component} />
}