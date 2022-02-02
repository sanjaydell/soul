import React, { useState } from 'react'
import constate from 'constate'

const UseContextProvider = () => {

  const [songsList, setSongsList] = useState([])
  const [currentSong, setCurrentSong] = useState()
  const [image, setImage] = useState()

  return {
    songsList,
    setSongsList,
    currentSong,
    setCurrentSong,
    image,
    setImage
  }
}

const [ContextProvider, setProvider] = constate(UseContextProvider)

export default ContextProvider

export setProvider, 
