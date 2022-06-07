import React from 'react'

const GetLyrics = () => {
  return (
    <div>GetLyrics</div>
  )
}

export default GetLyrics

/**
 * 
 * // Get lyrics for songs
async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>
    `;

    more.innerHTML = '';


}
 * 
 */

/**
 * 
 * // Get lyrics button click
result.addEventListener('click', e => {
  const clickedEl = e.target;

  if(clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist');
    const songTitle= clickedEl.getAttribute('data-songtitle');

    getLyrics(artist, songTitle); 

  }
});
 */