import React from 'react'
import './contact.scss'


function Contacst() {
    return (
        <div className='contact' >
            <div className="contact_box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <h1 className='me_contact'>Me Contact</h1>
                <div className="input_card" >
                    <div className="input_box1">
                        <p>Email</p>
                        <input type="email" className='inp1' />
                    </div>
                    <div className="input_box2">
                        <p>Name</p>
                        <input type="text" className='inp2' />
                    </div>
                    <div className="input_box3">
                        <p>Description</p>
                        <input type="text" className='inp3' />
                    </div>
                </div>
                <div className="contact_box_button_card">
                    <button>Sending</button>
                </div>

            </div>

        </div>
    )
}

export default Contacst