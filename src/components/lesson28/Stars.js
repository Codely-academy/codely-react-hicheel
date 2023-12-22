import React, { useState } from 'react'
import './style.css'
const Stars = () => {
    const numbers = [1, 2, 3, 4, 5]
    const [unelgee, setUnelgee] = useState()

    return (
        <div>
            {numbers.map(number =>
                <span className={unelgee >= number ? 'gold' : ''}
                    onClick={() => {
                        if (unelgee === number)
                            setUnelgee(0);
                        else setUnelgee(number)
                    }} >
                    ★
                </span>
            )}
        </div>
    )
}

export default Stars