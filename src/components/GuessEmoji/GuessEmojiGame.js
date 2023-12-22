import React, { useEffect, useState } from 'react'
import './style.css'
import one from '../../images/guess/onepiece.jpe'
import naruto from '../../images/guess/naruto.jpg'
import beep from './beep.mp4'
import weekendSong from './The Weeknd - Out of Time (Official Video).mp3'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const audio1 = new Audio(beep)
const weekendAudio = new Audio(weekendSong)

const GuessEmojiGame = () => {

    const { width, height } = useWindowSize()

    const [hariult, setHariult] = useState('')
    const asuult1 = {
        zuvHariu: 'One piece',
        zurag: one,
        emoji: "🏴‍☠️👒🍖🐒⛵️",
        songoltuud: ['One piece', 'Naruto', 'Demon slayer', 'Attack on titan']
    }
    const asuult2 = {
        zuvHariu: 'Naruto',
        zurag: naruto,
        emoji: "🦊🍜🍥🌀",
        songoltuud: ['One piece', 'Naruto', 'Demon slayer', 'Attack on titan']
    }
    const asuultuud = [asuult1, asuult2, asuult2, asuult2]
    const [asuultiinDugaar, setAsuultiinDugaar] = useState(0)
    const [togloomDuuslaa, setTogloomDuuslaa] = useState(false)
    const [onoo, setOnoo] = useState(0)
    const asuult = asuultuud[asuultiinDugaar]

    const handleClick = (songolt) => {
        audio1.play()
        console.log("songolt", songolt);
        setHariult(songolt)
        if (songolt === asuult.zuvHariu) {
            // Zuv hariulsan 
            setOnoo(umnuhOnoo => umnuhOnoo + 1)
        } else {
            // Buruu hariult
        }
        setTimeout(() => {
            setAsuultiinDugaar((umnuhAsuultiinDugaar) => {
                const daraaginDugaar = umnuhAsuultiinDugaar + 1
                // Дараагийн асуултын дугаар асуултын тооноос их бол тоглоом
                // дууссан гэсэн үг
                if (daraaginDugaar >= asuultuud.length) {
                    setTogloomDuuslaa(true);
                    weekendAudio.play();
                    return 0;
                } else
                    return daraaginDugaar
            })

            setHariult('')
        }, 1500);
    }
    const dahijTogloh = () => {
        setAsuultiinDugaar(0)
        setTogloomDuuslaa(false)
        setOnoo(0)
        weekendAudio.pause()
    }
    return (
        <div className='guess'>
            {togloomDuuslaa && <div className='main'>
                <Confetti
                    width={width}
                    height={height}
                />
                <h1>Тоглоом дууслаа</h1>
                <h1>Авах боломжтой оноо: {asuultuud.length} </h1>
                <h1>Таны авсан оноо: {onoo} </h1>
                <button onClick={() => dahijTogloh()}> Дахиж тоглох </button>
            </div>
            }

            {!togloomDuuslaa && <div className='main'>
                <h1 className='title'>Guess the emoji:  </h1>
                {hariult ?
                    <img className='zurag' src={asuult.zurag} alt="" />
                    : <h2 className='emoji'>  {asuult.emoji} </h2>
                }
                <div className='answers'>
                    {asuult.songoltuud.map((songolt, i) =>
                        <button
                            className={hariult === songolt &&
                                (asuult.zuvHariu === hariult ? 'nogoon' : 'ulaan')}
                            disabled={hariult}
                            onClick={() => handleClick(songolt)}>
                            {songolt}
                        </button>
                    )}
                </div>
            </div>}
        </div>
    )
}

export default GuessEmojiGame