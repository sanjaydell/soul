import React, { useState } from 'react'
import { setContextProvider } from './ContextProvider'
import './styles/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Api from './Api'

const SearchBar = () => {
  const {  setSearchKey } = setContextProvider()

  const [searchValue, setSearchValue] = useState('')

  function handleSearch (value) {
    setSearchKey(value)
    setSearchValue(value)
  }

  return( 
    <div className='search'>
      <div className='search-input'>
        <input 
          type='text'
          className='search-field'
          placeholder='search'
          value={searchValue}
          onChange={event => handleSearch(event.target.value)} 
        />
        <div className='search-icon'>
          <SearchIcon
            onClick={() => console.log('fine')}
          />
        </div>
      </div>
      <Api />
    </div>
  )
}

export default SearchBar