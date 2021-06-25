import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getToken } from '../service/Auth';


const PublicRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render = {()=> !getToken()?<Component />:<Redirect to={{ pathname: '/content'}} />}/>
  )
}

export default PublicRoute
