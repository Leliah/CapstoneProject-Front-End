import { Link, useNavigate, useParams } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Prompts() {
  let { index } = useParams();
  let navigate = useNavigate();
  const [prompts, setPrompts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize with 0
  const [todaysPrompt, setTodaysPrompt] = useState();

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

  function nextPromptBtn() {
    if (currentIndex < prompts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }


  function prevPromptBtn() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  
  function handleStartResponse() {
    if (todaysPrompt) {
      navigate(`/prompts/${todaysPrompt.id}`);
    }
  }

  return (
    <div className='prompts'>
      {/* <div id="prev-prompts-btn">
        <button className="prev-prompts-button">View Answered Prompts </button>
      </div> */}
      
      <div className='todays-prompts'>
        <h3 >Answer Today's Daily Prompt:</h3>
        <h4>{todaysPrompt?.prompt}</h4>
        
        {/* <button className='prev-prompt-btn' onClick={prevPromptBtn}>Previous</button> */}
        <button className='start-prompt-btn' onClick={handleStartResponse}>Start</button>
        {/* <button className='next-prompt-btn' onClick={nextPromptBtn}>Next</button> */}
      </div>

      <div className='more-prompts'>
        <Link to="/prompts/my-prompts">
            <button className="prev-prompts-button"> View Your Prompts </button>
            </Link>

        <div className="scrolling-wrapper-flexbox">
          {prompts.map((element) => (
            <div key={element.id} className="daily-prompts">
              <h4 className="title">{element.title}</h4>
              <h4>{element.prompt}</h4>
              <Link to={`/prompts/${element.id}`}>
                <button className='start-promptne-btn' >Start</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prompts;
