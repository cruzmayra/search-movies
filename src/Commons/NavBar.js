import React from 'react'
import Logo from '../logo.svg'


const NavBar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="lol">
          <img src={Logo} width="112" height="28" alt='react logo' />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
            Search Movies
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
             {' Coded with <3'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export {NavBar}