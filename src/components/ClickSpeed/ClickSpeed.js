import React, { useState } from 'react'
import Hairtsag from './Hairtsag'
import './style.css'
const ClickSpeed = () => {
    const [daralt, setDaralt] = useState(0)
    const [second, setSecond] = useState(0)

    const clickSec = (daralt / second * 1000).toFixed(2)
    const isGameEnd = second === 2000
    const ranking_names = {
        "slow": "Эмгэн хумс 🐌",
        "moderate": "Яст мэлхий🐢",
        "average": "Туулай🐰",
        "sonic_speed": "Супер соник🔥",
        "flash": "Марвел флаш⚡",
    };
    const handleRanking = (clickSec) => {
        console.log('clickSec', clickSec);
        if (clickSec <= 4) {
            alert(ranking_names.slow);
        } else if (clickSec <= 5) {
            alert(ranking_names.moderate)
        } else if (clickSec <= 6) {
            alert(ranking_names.average)

        } else if (clickSec <= 7) {
            alert(ranking_names.sonic_speed)
        } else if (clickSec > 7) {
            alert(ranking_names.flash)
        }
    }
    const handleClick = () => {
        // Цаг тоолж эхлэнэ
        if (daralt === 0) {
            const id = setInterval(() => {
                setSecond(umnuhSecond => {
                    const daraaginSecond = umnuhSecond + 10
                    if (daraaginSecond === 2000) {
                        // Зогсоох үйлдэл
                        clearInterval(id)
                    }
                    return daraaginSecond
                })
            }, 10);
        }
        if (isGameEnd) {
            // Ranking
            handleRanking(clickSec)
        } else {
            // Click hiine
            setDaralt(daralt + 1)
        }

    }

    return (
        <div className='main'>
            <div className='container'>
                <Hairtsag too={second / 1000} tailbar={"Timer"} color={'pink'} />
                <Hairtsag too={isNaN(clickSec) ? '0' : clickSec} tailbar={"Click/S"} color={'orange'} />
                <Hairtsag too={daralt} tailbar={"Score"} color={'green'} />
            </div>
            <button className='darah-heseg' onClick={handleClick} >{isGameEnd ? 'Тоглоом дууслаа' : "Энд дар"}</button>
        </div>
    )
}
export default ClickSpeed