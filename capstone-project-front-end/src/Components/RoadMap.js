import React from 'react'
import { useState, useRef } from 'react'

function RoadMap() {
    const [task, setTask] = useState([]);
    const inputRef = useRef();

    async function addTask (event) {
        event.preventDefault()
        setTask(prev => [...prev, inputRef.current.value])
    }
    console.log(task)

  return (
    <div className='roadMap'>
        <h2>RoadMap</h2>

        <form >
            <label htmlFor='roadmap-goal'>Tasks To Reach Goals</label>
            <br />
            <input
                ref={inputRef}
                type='text'
                id='roadmapGoal'
                className='goals-input'
                required
            />

            <button onClick={addTask} type='submit'>Add</button>
        </form>
        {task.map((goal) => {
            return (
                <ul>
                    <li>{goal}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default RoadMap