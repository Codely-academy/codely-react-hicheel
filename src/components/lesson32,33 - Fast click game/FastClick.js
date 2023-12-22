import React, { useState } from 'react'
import DisplayBox from './DisplayBox'
import './style.css'
const FastClick = () => {
    const [counter, setCounter] = useState(0)
    const [time, setTime] = useState(0)
    const handleClick = () => {
        if (counter === 0) {
            setInterval(() => {
                setTime(time => time + 10)
            }, 10);
        }
        setCounter(counter + 1)
    }
    const second = time / 1000
    const clickPerSec = parseFloat(counter / second).toFixed(2)
    return (
        <div className='main'>
            <div className='container'>
                <DisplayBox too={second} tailbar={'Timer'} ungu='blue' />
                <DisplayBox too={clickPerSec} tailbar={'Click/s'} ungu='orange' />
                <DisplayBox too={counter} tailbar={'Score'} ungu='green' />
            </div>
            <button onClick={handleClick} className='click-area'>Энд дарж эхлүүл</button>
        </div>
    )
}

export default FastClick