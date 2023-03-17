import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const signup = () => {
  return (
    <div>
      <Typography variant='h3'color='blue'>SIGN UP TO FACEBOOK</Typography>
      <br></br><br></br>
      <TextField label='name' variant='outlined'/>
      <br></br><br></br>
      <TextField label='number' variant='outlined'type='number'/><br></br><br></br>
      <TextField label='email' variant='outlined'/><br></br><br></br>
      <TextField label='password' variant='outlined'type='password'/><br></br><br></br>

      <Button variant="contained">SUBMIT</Button>
      
    </div>
  )
}

export default signup
