import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'

function feed() {
  return (
    <div className='feed-container'>
        <Navbar/>
        <Upload/>
        <div className='video-container'>
            <div className='post-container'>
                <video/>
            </div>
            <div className='post-container'>
                <video/>
            </div>
            <div className='post-container'>
                <video/>
            </div>
            <div className='post-container'>
                <video/>
            </div>
        </div>
    </div>
  )
}

export default feed