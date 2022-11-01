import "./Description.css"

import React from 'react'
import Footer from '../../common/components/Footer/Footer'

function Description() {
    return (
        <div className='desc-center'>
            <h4>Description</h4>
            <p>A goal of the game is to click on tiles from 1 to 25. <br /> 
            It will help to train your observation skills and visual memory.</p>
            <p>Game 25 by Alexander Kalashnikov is a final project for Hillel FrontEnd Pro course.<br />
            It features JS, React, React Router, Redux, Redux Thunk, Redux Logger, Axios.</p>
            <Footer />
        </div>
    )
}

export default Description