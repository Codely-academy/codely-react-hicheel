import React, { useState } from 'react'

const Search = () => {
    const [text, setText] = useState('')
    const onSearch = (e) => {
        const value = e.target.value;
        setText(value)
    }
    const lessons = [
        { name: 'Математик', point: 100 },
        { name: 'Англи хэл', point: 90 },
        { name: 'Монгол хэл', point: 95 }
    ]
    const filteredLessons = lessons.filter(
        lesson => lesson.point > 90
    )

    return (
        <div>
            <input type="text" placeholder='Хайлт' onChange={onSearch} />
            {filteredLessons.map(lesson => <h1>{lesson.name} - {lesson.point}</h1>)}
        </div>
    )
}
export default Search



