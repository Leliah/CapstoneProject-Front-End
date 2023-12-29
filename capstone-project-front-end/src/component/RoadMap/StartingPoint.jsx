import React from 'react'
import './Roadmap.css';
const StartingPoint = ({object, deleteGoal, editStartPoint}) => {
  console.log(object)

/**
 * DISPLAYING STARTING POINT
 */
  return (
    <div className='starting-box'>
        <div style={{display: 'flex', justifyContent: 'space-between' }}>
            <p>{object.start}</p>  
            <div className='start-edit-delete'>
            <button onClick={() => editStartPoint(object.id)}>✎</button>
            <button onClick={() => deleteGoal(object.id)}>X</button>
            </div>
    </div>
    </div>
  )
}

export default StartingPoint