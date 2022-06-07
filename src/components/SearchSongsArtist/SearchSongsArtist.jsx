import React, {useState,useEffect} from 'react'
import styled from "styled-components";
import {FaSearch} from 'react-icons/fa'
import {ShowData} from '../ShowData'


// Search by song or artist
function SearchSongsArtist() {

    const [search, setSearch] = useState([])

    const searchSongsAndArtist = async () => {
        const response = await fetch(`${'https://api.lyrics.ovh'}/suggest/${term}`);

        // handle response
        if(!response.ok) {
            throw new Error("Failed fetching lyrics")
        }
        const data = await response.json();
        console.log({data});
    };

    useEffect(() => {
        searchSongsAndArtist();
    },[]);

    const submitHandler = (event) => {
        event.preventDefault();
    }


  return (
    <div>
        <FormStyle onSubmit={submitHandler}>  
        <h1>LyricsSearch</h1>   
            <div>
                <FaSearch></FaSearch>
                <input 
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                />
            </div>
        </FormStyle>
        <ShowData />
    </div>
  )

}


const FormStyle = styled.form `
  margin: 0rem 20rem;

    div {
        position: relative;
        width: 100%;
    }

    input{
        border: 0;
        border-radius: 50px;
        font-size: 16px;
        padding: 15px 30px;
        width: 100%;
    }


`;


export default SearchSongsArtist; 

/**
 * 
 * // Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if(!searchTerm){
        alert('Please type in a search term');
    } else {
        searchSongs(searchTerm);
    }
    
});
 */