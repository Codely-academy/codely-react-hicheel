import React, { useState } from 'react'
import './style.css';
import sound from './audio.mp3'
const TicTac = () => {
    const [boxes, setBoxes] = useState(['', '', '', '', '', '', '', '', ''])
    const audio = new Audio(sound);
    const [lastClick, setLastClick] = useState('')
    const [winner, setWinner] = useState('')
    const checkWinner = (boxes) => {
        console.log("boxes", boxes);
        // 1. Хэвтээ шалгалт
        if (boxes[0] === boxes[1] && boxes[0] === boxes[2]) {
            console.log('Winner1', boxes[0]);
            setWinner(boxes[0])
        } else if (boxes[3] === boxes[4] && boxes[3] === boxes[5]) {
            console.log('Winner2', boxes[3]);
            setWinner(boxes[3])
        }
        // 2. Босоо шалгалт
        if (boxes[0] !== '' && boxes[0] === boxes[3] && boxes[0] === boxes[6]) {
            console.log('Winner3', boxes[0]);
            setWinner(boxes[0])
        }
        else if (boxes[1] !== '' && boxes[1] === boxes[4] && boxes[1] === boxes[7]) {
            console.log('Winner4', boxes[1]);
            setWinner(boxes[1])
        }
        else if (boxes[2] === boxes[5] && boxes[2] === boxes[8]) {
            console.log('Winner5', boxes[2]);
            setWinner(boxes[2])
        }
        // 3. Ташуу шалгалт

    }
    const handleClick = (i) => {
        if (boxes[i] === '') {
            audio.play()
            let newValue = lastClick === 'X' ? 'O' : 'X';
            boxes[i] = newValue;
            setBoxes([...boxes])
            setLastClick(newValue)
            // Check winner
            checkWinner(boxes)
        }

    }
    const handleRestart = () => {
        setBoxes(['', '', '', '', '', '', '', '', ''])
        setWinner('')
        setLastClick('')
    }
    return (
        <div className='container'>
            {winner !== '' && <h1 className='winner'>Winner: {winner}</h1>}
            {winner !== '' && <button onClick={handleRestart} className='winner'>Restart</button>}
            {/* Game boxes */}
            <div className='tic-tac'>
                {boxes.map((box, i) =>
                    <div className="box" onClick={() => handleClick(i)} >
                        {box}
                    </div>
                )}
            </div>

        </div>
    )
}

export default TicTac