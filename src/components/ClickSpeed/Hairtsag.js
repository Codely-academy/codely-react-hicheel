import React from 'react'
import './style.css'

const Hairtsag = ({ too, tailbar, color }) => {
    return (
        <div className={'hairtsag ' + color}>
            <h1>{too}</h1>
            <p>{tailbar}</p>
        </div>
    )
}

export default Hairtsag