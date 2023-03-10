import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gaston Jurado</h1>
        <h5 className="textlight">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

      <div className="me">
        <img src={me} alt="" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div> 
    </header>
  )
}

export default Header