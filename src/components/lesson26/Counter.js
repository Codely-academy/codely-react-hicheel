import React, { useState } from 'react'
import './style.css';
const Counter = () => {
    // Declare state with initial value 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Таалагдсан: {count}</h3>
            <button className='increase' onClick={() => setCount(count + 1)}>Таалагдсан</button>
        </div>
    );
}

export default Counter