import React from 'react'
import DontFound from '../../../image-not-found.png'

const Poster = ({source, title}) => {
  return (
    <figure class='image is-2by3'>
      {
        source === null
        ? <img src={DontFound} alt={`${title} poster`} />
        : <img src={`https://image.tmdb.org/t/p/original${source}`} alt={`${title} poster`} />
      }
    </figure>
  )
}

export default Poster