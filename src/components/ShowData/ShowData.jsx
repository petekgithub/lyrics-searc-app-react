import React from 'react'

function ShowData({data}){
  return (
    <>
    {
      
    }
    
    </>
  )
}

export default ShowData

/**
 * 
 * // Show song and artist in DOM
function showData(data) {

    result.innerHTML = `
        <ul class="songs">
            ${data.data.map(song => `<li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>`)
        .join('')
    }
        </ul>
    `;

   if (data.prev || data.next) {
    more.innerHTML = `
      ${
        data.prev
          ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`
          : ''
      }
      ${
        data.next
          ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`
          : ''
      }
    `;
  } else {
    more.innerHTML = '';
  }
}
 */