import React, { useEffect, useState } from 'react'
import { timeMsToMin } from '../../../utils/utils';

function Timer() {
const [start,] = useState(Date.now());
const [time, setTime] = useState(0);


useEffect(() => {
    const timer = setInterval(() => {setTime (Date.now() - start)}, 111)

    return () => {
        clearInterval(timer);
    }
}, [start])

    return (
    <h5>Time passed: {(time) ? timeMsToMin(time) : "0 sec"}</h5>
    )
}

export default Timer