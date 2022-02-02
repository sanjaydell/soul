import React from 'react'
import './styles/Dropdown.css'

function Dropdown(props) {
  return (
    <ul className='list-group' >
      {props.songs.map((song, key) => {
        return (
          <li className='list-group-item' key={key} >{song.name}</li>
        )
      })}
    </ul>
  )
}

export default Dropdown
