import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import './styles/Player.css'

function Player() {
  return (
    <nav className='navbar fixed-bottom navbar-light bg-light'>
      <div className='container-fluid'>
        <h6> soul </h6>
        <SkipPreviousIcon 
          className='skip-previous'
        />
        <PlayCircleIcon
          className='play'
         />
        <SkipNextIcon
          className='skip-next'
        />
      </div>
    </nav>
  )
}

export default Player
