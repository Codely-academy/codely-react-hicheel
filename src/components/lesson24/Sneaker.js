import React from 'react'
import "./style.css"
import LikeButton from './Like'
const Sneaker = ({ name, image, desc }) => {
    return (
        <div className='huree'>
            <img src={image} alt='' />
            <h1>{name}</h1>
            <p>{desc}</p>
            <LikeButton />
        </div>
    )
}

export default Sneaker