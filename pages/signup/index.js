import React from 'react'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import logo from '../../assets/Instagram.jpeg'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import IconButton from '@mui/material/IconButton'

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo}/>
            <TextField id="outlined-basic" 
            size="small" fullWidth 
            margin="dense" 
            label="Email" variant="outlined" />

            <TextField id="outlined-basic" 
            size="small" fullWidth 
            margin="dense" 
            label="FullName" variant="outlined" />

            <TextField id="outlined-basic" 
            size="small" fullWidth 
            margin="dense" 
            label="Password" variant="outlined"
            type="password" />

            <Button size="small" color="secondary" variant="outlined" component="label" fullWidth>
            <IconButton size="small" color="secondary" aria-label="add an alarm">< CloudUploadIcon/></IconButton>
            Upload Profile Image
            <input hidden accept="image/*" multiple type="file" />
            </Button>

            <Button style={{marginTop:"0.8rem"}}variant="contained" component="label" fullWidth size="small">
            Sign Up
            <input hidden accept="image/*" multiple type="file" />
            </Button>

            <div className='tnc'>By signing up, you agree to our Terms, Conditions and Cookies policy</div>
        </div>
        <div className='bottom-card'>Already have an account? <span style={{color:"purple"}}>Login</span></div>
    </div>
  )
}

export default index