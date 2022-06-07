import React, {useState, useEffect} from 'react';
import { SearchSongsArtist } from '../components/SearchSongsArtist'
import { ShowData } from '../components/ShowData'


function App(){

  return (
    <>
      <SearchSongsArtist />
      <ShowData />
    
    </>
  )
}

export default App;
