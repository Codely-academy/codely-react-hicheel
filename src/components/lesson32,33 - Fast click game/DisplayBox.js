import React from 'react'
import './style.css'
const DisplayBox = ({ too, tailbar, ungu }) => {
    return (
        <div className={'display-box ' + ungu} >
            <h1>{too}</h1>
            <h2>{tailbar}</h2>
        </div>
    )
}

export default DisplayBox