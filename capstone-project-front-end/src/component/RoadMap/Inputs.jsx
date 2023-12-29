import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import './Roadmap.css';

function Inputs({handleAddStartPoint, handleAddEndingPoint, handleAddAdditional}) {
    const [ startingPointValue, setStartingPointValue ] = useState('');
    const [ endingPointValue, setEndingPointValue ] = useState('');
    const [ additionalGoalValue, setAdditionalGoalValue ] = useState('');
    const [moreGoals, setMoreGoals] = useState(false);

    /**
     * 
     * ON CLICK FOR STARTING:
     * PASS INPUT VALUE ADD START POINT 
     */
    const handleSubmitStart = (event) => {
        event.preventDefault();
        handleAddStartPoint(startingPointValue);
    }

    /**
     * 
     * ON CLICK FOR END:
     * PASS INPUT VALUE ADD END POINT 
     */
    const handleSubmitEnd = (event) => {
        event.preventDefault();
        handleAddEndingPoint(endingPointValue);
    }

    /**
     * 
     * ON CLICK FOR ADDITIONAL:
     * PASS INPUT VALUE ADDITIONAL
     * THEN CLEARING TITLE
     */
    const handleSubmitAdditional = (event) => {
        event.preventDefault();
        handleAddAdditional(additionalGoalValue);
        setAdditionalGoalValue('')
    }

    /**
     * 
     * FOR STARTING POINT:
     * SETTING NAME OF STARTING TO WHAT IS TYPED IN THE INPUT
     */
    
    const onChangeTitle = (event) => {
        setStartingPointValue(event.target.value);
    }

    /**
     * 
     * FOR STARTING POINT:
     * SETTING NAME OF STARTING TO WHAT IS TYPED IN THE INPUT
     */
    const onChangeTitleEnd = (event) => {
        setEndingPointValue(event.target.value);
    }


    /**
     * 
     * FOR STARTING POINT:
     * SETTING NAME OF STARTING TO WHAT IS TYPED IN THE INPUT
     */
    const onChangeAdditional = (event) => {
        setAdditionalGoalValue(event.target.value);
    }

  return (
    <div className='navigation'>
        <div className='navigation-inputs' >
            <form className=''>
                <label className='starting'><span>A</span></label>
                <input type="text" 
                placeholder="Starting Point"
                onChange={onChangeTitle}
                value={startingPointValue}
                className='starting-input'
                required
                />
               <button 
                    onClick={handleSubmitStart} 
                className='starting-submit'
                style={{paddingTop: '12px', paddingBottom: '15px'}}
                type="submit"> 
                    SUBMIT 
                </button>


                <br/>


                {moreGoals ? (
                    <>
                    <label><span className='additional-star'>*</span></label>
                    <input 
                    type='text' 
                    placeholder='Steps To Goal' 
                    className='additional-input'
                    onChange={onChangeAdditional}
                    value={additionalGoalValue}
                    />
                    <button className='additional-submit' onClick={handleSubmitAdditional}style={{ paddingTop: '12px', paddingBottom: '15px'}}>SUBMIT</button>
                    </>
                    ) : (
                    <button 
                    type='button' 
                    className='more-steps-btn'
                    onClick={() => setMoreGoals(true)} style={{paddingTop: '7px', paddingBottom: '7px'}}>
                    Add Additional Steps <AiOutlinePlus size={10} />
                    </button>
                    )}

                <br />

                <label className='ending'><span>B</span></label>
                <input 
                type="text" 
                placeholder="End Goal"
                onChange={onChangeTitleEnd}
                value={endingPointValue}
                className='end-input'
                required
                />
                <button onClick={handleSubmitEnd} 
                className='ending-submit'
                style={{paddingTop: '12px', paddingBottom: '15px'}}> 
                 SUBMIT </button>

            </form>
        </div>
    </div>
  )
}

export default Inputs