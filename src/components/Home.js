import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {Container} from '@material-ui/core'
import {Box} from '@material-ui/core'
// import { getToken } from '../service/Auth';
const Home = () => {
  let history = useHistory()
  return (
    //!getToken()?
    <div>
      <Container>
        <Box textAlign = 'center' >
          <Button
              onClick = {() => {history.push('/login')}}
              variant="contained"
              color="default"
              startIcon={<ExitToAppIcon />}
            >
              Sign in/ Sign up
          </Button>
        </Box> 
      </Container>
    </div>
    //:<Redirect to = "/content"/>
  )
}

export default Home
