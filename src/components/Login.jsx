import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      
      <Typography variant='h3'color='primary'>login to FB</Typography><br></br>
      <TextField label='email' variant='outlined'/><br></br>
      <TextField label='password' variant='filled' type='password'/>
    </div>
  )
}

export default Login
