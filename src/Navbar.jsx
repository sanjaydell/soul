import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Navbar.css'
import Api from './Api'

const Navbar = () => {
  const [searchKey, setSearchKey] = useState('')
  const SearchBar = () => {
    return( 
      <div>
        <nav className='search-bar-dropdown'>
          <input 
            type='text'
            className='form-control'
            placeholder='search'
            onChange={e => setSearchKey(e.target.value)} />
          <i className='fas fa-search' type='search'></i>
          <Api searchKey={searchKey} />
        </nav>
      </div>
    )
  }
  
  return (
    <div className='navbar'>
      <img className='logo' src='./Soul.png' alt='' />
      <SearchBar />
    </div>
  )
}

export default Navbar
