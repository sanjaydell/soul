import React from 'react'
import { hot } from 'react-hot-loader/root'
import Navbar from './Navbar'
import Player from './Player'
import './styles/App.css'
import ContextProvider from './ContextProvider'

const App = () => {

  return (
    <div className='app'>
      <ContextProvider>
        <Navbar />
        <Player />
      </ContextProvider>
    </div>
  )
}

export default hot(App)
