import React, { useEffect } from 'react'
import "./hero.scss"
import AOS from 'aos'


function Hero() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='hero' >
      <div className="hero-container" data-aos="fade-right">
        <h1 className='hero_title' >Hi, I'm  <span className='span'>Abubakr</span></h1>
        <h3 className='hero_sec'>FrontEnd Devaloper</h3>
        <p className='her_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium iure vitae eaque excepturi, nostrum asperiores aut corrupti reiciendis culpa nihil? Praesentium ullam animi consectetur?</p>
        <div className="btn_card">
          <button>Click</button>
          <button>click Me</button>
        </div>
      </div>
    </div>
  )
}

export default Hero