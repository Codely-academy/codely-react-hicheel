import React, { useState } from 'react'
import Durvuljin from './Durvuljin'

const Dasgal = () => {
    const toonuud = [1, 2, 3, 4, 5]
    const [searchText, setSearchText] = useState("")
    const [jagsaalt, setJagsaalt] = useState(toonuud)
    const handleChange = (e) => {
        const text = e.target.value;
        setSearchText(text)
    }
    const onSearch = () => {
        const shuugdsenToonuud = toonuud.filter(too => too >= searchText)
        setJagsaalt(shuugdsenToonuud)
    }

    return <div >
        <input type="text" onChange={handleChange} />
        <button onClick={onSearch}>Хайх</button>
        <div className="hevtee">
            {jagsaalt.map(too => <Durvuljin dugaar={too} />)}
        </div>

    </div>

}

export default Dasgal