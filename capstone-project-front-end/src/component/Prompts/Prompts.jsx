import { Link, useNavigate, useParams } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Prompts() {
    let { index } = useParams();
    let navigate = useNavigate();
    const [prompts, setPrompts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [todaysPrompt, setTodaysPrompt] = useState();
    console.log(API)
    useEffect(() => {
        axios
        .get(`${API}/prompts`)
        .then((response) => {
            //PROMPTS THAT ARE NOT MARKED AS COMPLETED
            let notCompletedPrompts = response.data.filter((element) => !element.is_completed);

            //IF THERE ARE ANY PROMPTS THAT MEANT THAT CRITERIA, SET IT AS TODAYS PROMPT
            if(notCompletedPrompts.length > 0){
                setTodaysPrompt(notCompletedPrompts[0].title)
            } else {
                console.log('you completed them');
            }

            //SETTING DATA TO PROMPTS VARIABLE
            setPrompts(response.data);
        })
        .catch((e) => console.error("catch", e));
    }, [])
    console.log(`${API}/prompts`)
    //PREVIOUS BTN
    function prevPromptBtn() {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
            setTodaysPrompt(prompts[currentIndex - 1].title);
        }
    }

    //NEXT BTN
    function nextPromptBtn() {
        if(currentIndex < prompts.length -1){
            setCurrentIndex(currentIndex + 1);
            setTodaysPrompt(prompts[currentIndex].title);
        }
    }

    function handleStartResponse () {
        prompts.map((element) => {
            if(todaysPrompt === element.title){
                navigate(`/prompts/${element.id}`)
            }
        })
    }

    
  return (
    <div className='prompts'>
        <div id="prev-prompts-btn">

            <button className="prev-prompts-button">View Previous Prompts </button>

            <Link to="/prompts/my-prompts">
            <button>View Your Prompts </button>
            </Link>

        </div>

        <div className='todays-prompts'>
            <h3 >Answer Today's Daily Prompt:</h3>
            <p className='prompt-title'>{todaysPrompt}</p>
            <button className='prev-prompt-btn' onClick={prevPromptBtn}>Previous</button>
            <button className='start-prompt-btn'
            onClick={handleStartResponse}>✎</button>
            <button className='next-prompt-btn' onClick={nextPromptBtn}>Next</button>

        </div>

        <div className='more-prompts'>
            <h3>View More Prompts</h3>
            <div className="scrolling-wrapper-flexbox">
                {/* map here */}
                {prompts.map((element) => {
                    return(
                        <div key={element.id} className="daily-prompts">
                        <h4>{element.title}</h4>
                        <Link to={`/prompts/${element.id}`}><button className='start-promptne-btn' >Start</button></Link>
                    </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default Prompts