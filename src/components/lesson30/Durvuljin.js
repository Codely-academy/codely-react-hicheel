import React, { useState } from 'react'
import './style.css'
const Durvuljin = ({ dugaar }) => {
    const [too, setToo] = useState(0)

    const handleClick = () => {
        setToo(too + 1)
    }
    return (
        <div className='shar-hairtsag'>
            Durvuljin

            <h1>{dugaar}</h1>
            <button onClick={handleClick}>{too}</button>
        </div>
    )
}

export default Durvuljin