import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

function Edit({editStartPoint, object}) {
    const [ startingPointValue, setStartingPointValue ] = useState('');


    /**
     * 
     * ON CLICK FOR STARTING:
     * PASS INPUT VALUE ADD START POINT 
     */
    const handleSubmitStart = (event) => {
        event.preventDefault();
        editStartPoint(startingPointValue, object.id);
    }

    


    /**
     * 
     * FOR STARTING POINT:
     * SETTING NAME OF STARTING TO WHAT IS TYPED IN THE INPUT
     */
    
    const onChangeTitle = (event) => {
        setStartingPointValue(event.target.value);
    }


    

  return (
    <div className='navigation'>
        <div className='navigation-inputs' >
            <form className=''>
                <label className='starting'><span>A</span></label>
                <input type="text" 
                placeholder="Edit Starting"
                onChange={onChangeTitle}
                value={startingPointValue}
                className='starting-input'
                required
                />
                <button onClick={handleSubmitStart} 
                style={{borderRadius: '1px', paddingTop: '7px', paddingBottom: '7px'}}  > 
                 UPDATE 
                 </button>

                <br/>


                

            </form>
        </div>
    </div>
  )
}

export default Edit