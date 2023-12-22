import React, { useState } from 'react'
import './style.css'
const MemoryGame = () => {
    const [boxes, setBoxes] = useState(['🐱', '🎀', '🐶', '💕', '🐼', '🤖', '👼',
        '🐭', '🐱', '🎀', '🐶', '💕', '🐼', '🤖', '👼', '🐭'])
    // Darsan box nii bairlaliig hadgalj bga
    const [clickedBox, setClickedBox] = useState([])
    const [zuvTaasan, setZuvTaasan] = useState([])
    // ['🐶','🐶','🐶','','','']
    // 🐱🎀🐭🐶💕🐼🤖👼
    const check = (clickedBox) => {
        if (clickedBox.length === 2) {
            // clickedBox
            console.log("check", clickedBox);
            // Index => Байрлал 
            const boxIndex1 = clickedBox[0]
            const boxIndex2 = clickedBox[1]
            const emoji1 = boxes[boxIndex1]
            const emoji2 = boxes[boxIndex2]

            if (emoji1 === emoji2) {
                setZuvTaasan([...zuvTaasan, emoji1])
                setClickedBox([])
            } else {
                // 1 second iin daraa darsan box oo tseverlej baina
                setTimeout(() => {
                    setClickedBox([])
                }, 1000)

            }
        }

    }
    const handleClick = (i) => {
        if (clickedBox.length < 2) {
            // [0]
            let newClickedBox = [...clickedBox, i]
            console.log("newClickedBox=", newClickedBox);
            setClickedBox(newClickedBox)
            // За миний дарсан утганууд ижилхэн байна уу шалгаад өг.
            check(newClickedBox)
        }

    }

    const isWin = zuvTaasan.length === 8
    return (
        <div className='container'>
            {isWin && <h1>Баяр хүргье. Та яллаа</h1>}
            <div className="main">
                {boxes.map(
                    (emoji, i) => <div onClick={() => handleClick(i)} className="box">
                        {/* [0].includes() */}

                        {clickedBox.includes(i) || zuvTaasan.includes(emoji)
                            ? emoji : ''}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MemoryGame