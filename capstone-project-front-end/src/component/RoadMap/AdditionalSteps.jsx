import React from 'react'

function AdditionalSteps({object, editStartPoint, deleteGoal}) {
  return (
    <div className='additional-box'>
        <div style={{display: 'flex', justifyContent: 'space-between' }}>
            <p>{object.middle}</p>  
            <div className='start-edit-delete'>
            <button onClick={() => editStartPoint(object.id)}>✎</button>
            <button onClick={() => deleteGoal(object.id)}>X</button>
            </div>

    </div>
    </div>
  )
}

export default AdditionalSteps