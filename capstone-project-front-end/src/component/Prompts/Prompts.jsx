import { Link, useNavigate, useParams } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";

import './Prompts.css';

const API = process.env.REACT_APP_API_URL;

function Prompts() {
  let { index } = useParams();
  let navigate = useNavigate();
  const [prompts, setPrompts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with 0
  const [todaysPrompt, setTodaysPrompt] = useState();
  const [promptCategory, setPromptCategory] = useState('all');

  useEffect(() => {
    axios
      .get(`${API}/prompts`)
      .then((response) => {
        let notCompletedPrompts = response.data.filter((element) => !element.is_completed);
        if (notCompletedPrompts.length > 0) {
          setTodaysPrompt(notCompletedPrompts[currentIndex]);
        } else {
          console.log('you completed them');
        }

        setPrompts(response.data);
      })
      .catch((e) => console.error("catch", e));
  }, [currentIndex]);

  // function nextPromptBtn() {
  //   if (currentIndex < prompts.length - 1) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // }

  // function prevPromptBtn() {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // }

  
  function handleStartResponse() {
    if (todaysPrompt) {
      navigate(`/prompts/${todaysPrompt.id}`);
    }
  }

  function handleCategoryChange(category) {
    setPromptCategory(category);
}
  return (
    <div className='prompts'>
      {/* <div id="prev-prompts-btn">
        <button className="prev-prompts-button">View Answered Prompts </button>
      </div> */}
      
      <div className='todays-prompts'>
        <h3 >Today's Daily Prompt:</h3>
        <h4>{todaysPrompt?.prompt}</h4>
        
        {/* <button className='prev-prompt-btn' onClick={prevPromptBtn}>Previous</button> */}
        <button className='start-prompt-btn' onClick={handleStartResponse}>Start</button>
        {/* <button className='next-prompt-btn' onClick={nextPromptBtn}>Next</button> */}
      </div>

      {/* <Link to="/prompts/my-prompts">
        <button className="prev-prompts-button"> View Your Prompts </button>
      </Link> */}

      <div className='more-prompts'>
        <h1>More Prompts</h1>
        <div className="category-radio-btns">
                <label>
                    <input 
                    type="radio"
                    value="all"
                    checked={promptCategory === 'all'}
                    onChange={() => handleCategoryChange('all')}/>
                    All
                </label>

                <label>
                    <input 
                    type="radio"
                    value="Emotional Awareness"
                    checked={promptCategory === "Emotional Awareness"}
                    onChange={() => handleCategoryChange("Emotional Awareness")}/>
                    Emotional Awareness
                </label>

                <label>
                    <input 
                    type="radio"
                    value="Personal Development"
                    checked={promptCategory === "Personal Development"}
                    onChange={() => handleCategoryChange("Personal Development")}/>
                    Personal Development
                </label>

                <label>
                    <input 
                    type="radio"
                    value="Social Connection"
                    checked={promptCategory === "Social Connection"}
                    onChange={() => handleCategoryChange("Social Connection")}/>
                    Social Connection
                </label>

                <label>
                    <input 
                    type="radio"
                    value="Learning and Growth"
                    checked={promptCategory === "Learning and Growth"}
                    onChange={() => handleCategoryChange("Learning and Growth")}/>
                    Learning and Growth
                </label>
            </div>
        <div className="scrolling-wrapper-flexbox">
        {prompts
                    .filter((element) => {
                        if(promptCategory === 'all'){
                            return true;
                        } else {
                            return element.type === promptCategory
                        }
                    })
                    .map((element) => {
                        return(
                            <div key={element.id} className="daily-prompts">
                            <h3>{element.title}</h3>
                            <p className="elementpro">{element.prompt}</p>
                            <Link to={`/prompts/${element.id}`}><button className='start-prompt-btn' >Start</button></Link>
                            </div>
                        )
                    })}
        </div>
       
      </div>
    </div>
  );
}

export default Prompts;
