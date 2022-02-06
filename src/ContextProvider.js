import  { useState } from 'react'
import constate from 'constate'

const UseContextProvider = () => {

  const [songsList, setSongsList] = useState([])
  const [currentSong, setCurrentSong] = useState()
  const [image, setImage] = useState()
  const [searchKey, setSearchKey] = useState('')
  const [token, setToken] = useState()
  const [songSrc, setSongSrc] = useState()

  return {
    songsList,
    setSongsList,
    currentSong,
    setCurrentSong,
    image,
    setImage,
    searchKey,
    setSearchKey,
    token,
    setToken,
    songSrc,
    setSongSrc
  }
}

const [ContextProvider, setContextProvider] = constate(UseContextProvider)

export default ContextProvider

export { ContextProvider, setContextProvider }
