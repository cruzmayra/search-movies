import React from 'react'
import {Link} from 'react-router-dom'

const ButtonBackToHome = ({handleClick}) => {
  return (
    <button className="button is-primary" onClick={handleClick}>
      Regresar al Home
    </button>
  )
}

export {ButtonBackToHome}