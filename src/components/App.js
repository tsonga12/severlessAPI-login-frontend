import axios from 'axios';
import React, { useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {getToken, resetUserSession} from '../service/Auth'
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import Content from './Content';
import Home from './Home';

const App = () => {
  
  useEffect(() => {
    const requestBody = {
      token: getToken()
    }
    const configBody = {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    }
    if(requestBody.token){
      axios.post("https://jtto0ekonc.execute-api.ca-central-1.amazonaws.com/prod/verify",requestBody, configBody).then(response => {

      }).catch(err =>{
          resetUserSession()
      })
    }
  },[])

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path = "/" component={Home}/>
          <PublicRoute exact path="/register" component={Register}/>
          <PublicRoute exact path="/login" component={Login}/>
          <PrivateRoute exact path="/content" component={Content}/>
        </Switch> 
      </div>
    </Router>
  )
}

export default App

