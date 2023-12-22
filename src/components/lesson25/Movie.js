import React, { useState } from 'react';
import Counter from '../lesson26/Counter';
import './style.css';
import Stars from '../lesson28/Stars';
const Movie = ({ image, name, description }) => {

    return (
        <div className="movie-card">
            <div>
                <img src={image} alt="" className="movie-image" />
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <Stars />
            <Counter />
        </div>
    );
};

export default Movie;

