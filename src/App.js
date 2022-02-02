import React from 'react'
import { hot } from 'react-hot-loader/root'
import Navbar from './Navbar'
import Player from './Player'
import './styles/App.css'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Player />
    </div>
  )
}

export default hot(App)
