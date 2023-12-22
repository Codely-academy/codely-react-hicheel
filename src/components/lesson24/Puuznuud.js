import React from 'react'
import Sneaker from './Sneaker'
import puuz1 from "../../images/image1.png";
import puuz2 from "../../images/image2.png";
import puuz3 from "../../images/image3.png";
import './style.css'
const Puuznuud = () => {
    const data = [
        { name: 'Nike blazer1', desc: 'Nikeeee', image: puuz1 },
        { name: 'Nike blazer2', desc: 'Nikeeee', image: puuz2 },
        { name: 'Nike blazer3', desc: 'Nikeeee', image: puuz3 },
    ]
    return (
        <div className='mur'>
            {data.map(puuz => <Sneaker name={puuz.name} desc={puuz.desc} image={puuz.image} />)}

        </div>
    )
}

export default Puuznuud