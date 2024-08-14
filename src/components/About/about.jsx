import React from 'react'
import Api from "../static/api"
import "./about.scss"
function About() {
    return (
<div className='about'>
            <div className="about_container">
                <div className="about-img">
                    <div className='about_img'  data-aos="zoom-in-up" ></div>
                </div>
                <div className="about-content">
                    <h2 data-aos="fade-right" ata-aos-offset="300">Web About Programmer</h2>
                    <div className='about_home_card'>
                        {Api.map((data)=> 
                            <span className='about-content-card1' data-aos="flip-left"   data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <p>{data.title}</p>
                            <div className='frontend_img_div'>
                                <img src="" alt="" />
                            </div>
                        </span>
                        )}
                       
                    </div>
                </div>
                <div className="btn-box btns" data-aos="flip-left">
                    <button className="btn">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default About