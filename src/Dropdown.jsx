import React from 'react'
import { setContextProvider } from './ContextProvider'
import './styles/Dropdown.css'

function Dropdown() {
  const { songsList, setSongSrc } = setContextProvider()

  return (
    <ul className='list-group' >
      {songsList.map((song, key) => {
        return (
          <li 
            className='list-group-item'
            key={key}
            onClick={e => console.log(e.target)}
          >
          <img
           src={song?.album?.images[2].url}
           alt=''
          />
          <h6>{song.name}</h6>
          <br />
          by
          <br />
          {song?.artists[0].name}
          <button
            onClick={() => setSongSrc(song.external_urls.spotify)}
          >
            play
          </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Dropdown
