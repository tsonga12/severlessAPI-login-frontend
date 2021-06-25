import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { resetUserSession } from '../service/Auth';

const Content = () => {
  let history = useHistory()

  const logoutHandler = () => {
    resetUserSession()
    history.push('/')
  }

  return (
    <div>
      <p>hello world this is content page</p>
      <Button
          onClick = {logoutHandler}
          variant="contained"
          color="default"
        >
          Logout
      </Button>
    </div>
    
  )
}

export default Content
