import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import './styles/Player.css'
import { setContextProvider } from './ContextProvider'
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Player() {

  const { songSrc, token } = setContextProvider()

  axios('https://api.spotify.com/v1/tracks/2K7xn816oNHJZ0aVqdQsha', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
          }).then(response => {
            console.log('songresponse', response)
          })

  const [isPlaying, setIsPlaying] = useState(false)

  const playRef = useRef(null)

  // useEffect(() => {
  //   const roll = isPlaying ? playRef.current.play() : playRef.current.pause()
  //   console.log(roll)
  // },[])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    isPlaying ? playRef.current.play() : playRef.current.pause()
  }

  return (
    <div className='footer'>
      <div className='album-logo'>
        
      </div>
      <div className='footer-left' >
      <h6> Now Playing </h6>
      <h5>Song name and Singer</h5>
      </div>
      {songSrc && 
      <audio
      src={songSrc}
      ref={playRef}
      >
      </audio>
      }
      {console.log(songSrc)}
      <div className='footer-center' >
      <SkipPreviousIcon 
        className='skip-previous'
      />
      <PlayCircleIcon
        className='play'
        fontSize='large'
        onClick={() => handlePlay()}
      />
      <SkipNextIcon
        className='skip-next'
      />
      </div>     
    </div>
  )
}

export default Player
