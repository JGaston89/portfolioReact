import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/po1.jpeg'
import IMG2 from '../../assets/po2.jpeg'
import IMG3 from '../../assets/po3.jpeg'
import IMG4 from '../../assets/po4.jpeg'
import IMG5 from '../../assets/po5.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Parasite eve Aya',
    github: 'https://github.com/JGaston89',
    demo: 'https://dribbble.com/Gjurado89',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Parasite eve Aya',
    github: 'https://github.com/JGaston89',
    demo: 'https://dribbble.com/Gjurado89',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Parasite eve Aya',
    github: 'https://github.com/JGaston89',
    demo: 'https://dribbble.com/Gjurado89',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Parasite eve Aya',
    github: 'https://github.com/JGaston89',
    demo: 'https://dribbble.com/Gjurado89',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Parasite eve Aya',
    github: 'https://github.com/JGaston89',
    demo: 'https://dribbble.com/Gjurado89',
  }
]

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image , title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt="{title}" />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Porfolio