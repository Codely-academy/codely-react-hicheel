import React, { useState } from 'react'
import './style.css'
import sound1 from './beep.mp4'
import winnerSound from './The Weeknd - Out of Time (Official Video).mp3'

import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

const buttonAudio = new Audio(sound1)
const winnerAudio = new Audio(winnerSound)

const MemoryGame = () => {
    const { width, height } = useWindowSize();

    const emojis = [
        '🐱', '🎀', '🐶', '💕', '🐼', '🤖', '👼', '🐭',
        '🐱', '🎀', '🐶', '💕', '🐼', '🤖', '👼', '🐭']
    const [boxes, setBoxes] = useState(emojis.sort(() => Math.random() - 0.5))
    const [clickedBox, setClickedBox] = useState([])
    const [zuvHariultuud, setZuvHariultuud] = useState([])
    // ['🐶','🐶','🐶','','','']
    // 🐱🎀🐭🐶💕🐼🤖👼
    const check = (clickedBox) => {
        if (clickedBox.length === 2) {
            // clickedBox
            console.log("check", clickedBox);
            // Index => Байрлал 
            const boxIndex1 = clickedBox[0]
            const boxIndex2 = clickedBox[1]
            const emoji1 = boxes[boxIndex1];
            const emoji2 = boxes[boxIndex2];
            if (emoji1 === emoji2) {
                // 2 ижил сонгосон үед
                const newZuvHariultuud = [...zuvHariultuud, emoji1]
                setZuvHariultuud(newZuvHariultuud)
                if (newZuvHariultuud.length === 8) {
                    // Ялсан
                    winnerAudio.play();
                }

                setClickedBox([])
            } else {
                // 2 өөр иможи дарсан үед
                // 1 секундын дараа дарсан товчнуудаа хоосолж байна
                setTimeout(() => {
                    setClickedBox([])
                }, 1000)

            }
        }

    }
    const handleClick = (i) => {
        if (clickedBox.length < 2) {
            buttonAudio.play()
            // newClickedBox = [ 3 ]
            let newClickedBox = [...clickedBox, i]
            console.log("newClickedBox=", newClickedBox);
            // Дарсан товчны байрлалыг clickedBox-руу нэмээд хадгалж
            setClickedBox(newClickedBox)
            // 2 ижилхэн зүйл байгааг шалгана
            check(newClickedBox)
        }

    }
    const handleReset = () => {
        setClickedBox([])
        setZuvHariultuud([])
        setBoxes(emojis.sort(() => Math.random() - 0.5))
        winnerAudio.pause();
    }
    const isWin = zuvHariultuud.length === 8
    console.log('zuvHariultuud', isWin, zuvHariultuud.length);
    return (
        <div className='container'>
            {isWin &&
                <div>
                    <Confetti
                        width={width}
                        height={height}
                    />
                    <h1>Та яллаа</h1>
                    <button onClick={handleReset}>Дахиж эхлэх</button>
                </div>
            }
            <div className="main">
                {boxes.map((emoji, i) =>
                    <div onClick={() => handleClick(i)} className="box">
                        {/* Тухайн боксны байрлал нь clickedBox дотор байвал emoji харуулна
                        үгүй бол юу ч харуулахгүй  */}
                        {clickedBox.includes(i) || zuvHariultuud.includes(emoji) ? emoji : ''}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MemoryGame