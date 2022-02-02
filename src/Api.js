import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Credentials from './Credentials';
import Dropdown from './Dropdown';

function Api(props) {
  const credentials = Credentials()
  const [token, setToken] = useState()
  const [listOfSongs, setListOfSongs] = useState([])

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(credentials.ClientId + ':' + credentials.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {      
    setToken(tokenResponse.data.access_token)
    const url = `https://api.spotify.com/v1/search?q=${props.searchKey}&type=track&include_external=audio&limit=10`
    axios(url, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (response => { 
        console.log(response)
        setListOfSongs(response.data?.tracks?.items)       
      });
  })
  }, [credentials.ClientId, credentials.ClientSecret, props])

  return (
    <Dropdown songs={listOfSongs} />
  )
}

export default Api
