import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { setContextProvider } from './ContextProvider'
import './styles/Player.css'

const Player = () => {

  const { songSrc, token } = setContextProvider()
  console.log(token)

  return(
    <div className='footer'>
      <SpotifyPlayer
        token='BQBIYa6hjY-b1CZxXe38hgxq50HDdPhaqt63Poj4BtxZrNImmLAj7VGRWKAIExAcvSsnrB3diNHXnrzIUwg'
        play={true}
        showSaveIcon
        uris={songSrc ? [songSrc] : []}
      />
    </div>
  )
}

export default Player
