import React from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
  return (
    <div className='upload-btn'>
        <Button size="large" color="secondary" variant="outlined" component="label" fullWidth startIcon={<MovieIcon/>}>
            Upload File
        {/* <IconButton size="small" color="secondary" aria-label="add an alarm">< MovieIcon/></IconButton> -> ye comment islie hai kyuki upar wala "startIcon" iska alternative hai*/}
        <input hidden accept="image/*" multiple type="file" />
        </Button>
        <LinearProgress color='secondary' variant="determinate" value={"30"} sx={{mt:"0.2rem",mb:"0.2rem"}} />
        </div>
  )
}

export default Upload