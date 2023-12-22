import React, { useState } from 'react'
import './style.css'
const LikeButton = () => {
    const [text, setText] = useState('👍')
    return (
        <div>
            <button
                className={text === '👎' ? 'dislike' : 'like'}
                onClick={() => { setText(text === '👎' ? '👍' : '👎') }}>
                {text}
            </button>
        </div>
    )
}

export default LikeButton