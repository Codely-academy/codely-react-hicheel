import React, { useState } from 'react'
import './style.css'
const TooTaahTogloom = () => {
    const [sanamsarguiToo, setSanamsarguiToo] = useState(Math.floor(Math.random() * 100))
    const [taasanToo, setTaasanToo] = useState('')
    const [hariu, setHariu] = useState("")
    const [bolomj, setBolomj] = useState(5)
    console.log(sanamsarguiToo);
    const handleChange = (e) => {
        const text = e.target.value;
        console.log(text);
        setTaasanToo(text)
    }

    const handleClick = () => {
        console.log(sanamsarguiToo, taasanToo);
        if (sanamsarguiToo == taasanToo) {
            setHariu("TA HOJLOO")
        } else {
            const uldsenBolomj = bolomj - 1;
            if (uldsenBolomj < 0) {
                return setHariu("TA HOJIGDLOO!!!")
            }
            setBolomj(uldsenBolomj)
            if (taasanToo > sanamsarguiToo) {
                setHariu("IH BN, Uldsen bolomj:" + uldsenBolomj)
            } else {
                setHariu("BAGA BN, Uldsen bolomj:" + uldsenBolomj)
            }
        }
    }
    return (
        <div className='container'>
            <h1>Санасан тоо хэд вэ? </h1>
            <p>1-100-н хооронд байгаа тоог таагаарай</p>
            <div>
                <input
                    onChange={handleChange}
                    type="number"
                    placeholder='Таах тоогоо оруулна уу.'
                />
                <button onClick={handleClick}>Таах</button>
            </div>
            <h3>Хариу: {hariu}  </h3>
        </div>
    )
}

export default TooTaahTogloom