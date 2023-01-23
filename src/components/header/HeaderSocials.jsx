import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com/in/gaston-jurado-360267144/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/JGaston89" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials