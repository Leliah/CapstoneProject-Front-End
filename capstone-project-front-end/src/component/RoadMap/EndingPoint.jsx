import React from 'react'

const EndingPoint = ({object, editStartPoint, deleteGoal}) => {

/**
 * DISPLAYING TASKS
 */
  return (
    <div className='ending-box'>
        <div style={{display: 'flex', justifyContent: 'space-between' }}>
            <p>{object.end}</p>  
            <div className='start-edit-delete'>
            <button onClick={() => editStartPoint(object.id)}>✎</button>
            <button onClick={() => deleteGoal(object.id)}>X</button>
            </div>

    </div>
    </div>
  )
}

export default EndingPoint