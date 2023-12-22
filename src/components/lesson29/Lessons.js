import React, { useState } from 'react'

const Lessons = () => {
    const lessons = [
        { name: 'Математик', point: 100 },
        { name: 'Англи хэл', point: 90 },
        { name: 'Монгол хэл', point: 95 }
    ];
    const [search, setSearch] = useState('')
    const filteredLesson = lessons.filter(
        lesson => lesson.name.toLowerCase().includes(search.toLowerCase()))
    console.log('filteredLesson', filteredLesson);
    const onTyping = (e) => {
        const text = e.target.value;
        console.log('Бичсэн текст бол: ' + text);
        setSearch(text)
    }
    return (
        <div>
            <input type="text" placeholder='Хайлт' onChange={onTyping} />
            {filteredLesson.map(lesson => <h1>{lesson.name} {lesson.point}</h1>)}</div>
    )
}

export default Lessons
