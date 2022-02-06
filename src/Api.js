import React, { useEffect } from 'react'
import axios from 'axios';
import { setContextProvider } from './ContextProvider'
import Credentials from './Credentials';
import Dropdown from './Dropdown';

function Api() {
  const { searchKey, setSongsList, setToken } = setContextProvider()
  const {ClientId, ClientSecret} = Credentials()
  
  useEffect(() => {
    async function fetchData () {
      await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(ClientId + ':' + ClientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      }).then(tokenResponse => {
        setToken(tokenResponse.data.access_token)
        const url = `https://api.spotify.com/v1/search?q=${searchKey}&type=track&include_external=audio&limit=20`
        axios(url, {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then (response => {
          console.log(response.data?.tracks?.items)
          setSongsList(response.data?.tracks?.items)
        })
      })
    }
    fetchData()
  }, [searchKey])

  return (
    <Dropdown />
  )
}

export default Api
