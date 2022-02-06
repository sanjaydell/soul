import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Navbar.css'
import SearchBar from './SearchBar';

const Navbar = () => {

  return (
    <div className='navbar'>
      <img className='logo' src='./Soul.png' alt='' />
      <SearchBar />
    </div>
  )
}

export default Navbar
