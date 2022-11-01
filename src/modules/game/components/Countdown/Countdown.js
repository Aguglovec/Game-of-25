import "./Countdown.css"
import React, { useEffect, useState } from 'react'

function Countdown({mSeconds}) {
    const [time, setTime] = useState(mSeconds/1000);
    
    useEffect(() => {
        const countdown = setInterval(() => { if (time > 0) {setTime (time-1)}}, 1000)
    
        return () => {
            clearInterval(countdown);
        }
        }, [time])
    
    return (
    <h5 className='countRed'>Memorise as much as you can. Time left: <strong>{time}</strong></h5>
    )
    
}

export default Countdown