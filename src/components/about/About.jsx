import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi bibendum neque egestas congue quisque egestas. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About