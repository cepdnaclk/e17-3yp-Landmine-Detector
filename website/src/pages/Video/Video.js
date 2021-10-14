import './Video.css'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

// Only loads the YouTube player


function Video(){
    return(
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=TCkq_5MgafE'
          width='100%'
          height='100%'
        />
        </div>
    )
}

export default Video;