import { Link, useNavigate, useParams } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

function Prompts() {
    let { index } = useParams();
    let navigate = useNavigate();
    const [prompts, setPrompts] = useState([]);
    const [randomPrompts, setRandomPrompts] = useState();

    useEffect(() => {
        axios
        .get(`http://localhost:3009/prompts`)
        .then((response) => {
            setPrompts(response.data);
            //MAKING SURE PROMPTS ARR ISN'T EMPTY
             if(response.data.length > 0){
            setRandomPrompts(dailyPrompt());
            } else {
                console.log('need more prompts!!!')
            }
        })
        .catch((e) => console.error("catch", e));
    }, [dailyPrompt()])


    //RANDOMIZED DAILY PROMPTS
    function dailyPrompt() {
        //CHECKING IF PROMPT IS NOT COMPLETED YET, IF NOT, WE WANT TO DISPLAY
        let notCompletedYet = prompts.map((element) => {
            if(element.is_completed === false){
                return true
            } else {
                return false
            }
        })

        //IF PROMPTS ARE AVAILABLE AND ARE NOT COMPLETED: RANDOMIZE!
        if (prompts.length > 0 && notCompletedYet) {
        let promptPosition = Math.floor(Math.random() * prompts.length);
        let randomPrompt = prompts[promptPosition].title;
        return randomPrompt
        } else {
            console.log('No prompts avail')
        }
    }

    function nextPromptBtn() {
        let nextPrompt = dailyPrompt();
        setRandomPrompts((prevPrompt) => (nextPrompt !== prevPrompt ? nextPrompt : dailyPrompt()));
    }

    function handleStartResponse () {
        prompts.map((element) => {
            if(randomPrompts === element.title){
                navigate(`/prompts/${element.id}`)
            }
        })
    }

  return (
    <div className='prompts'>
        <div id="prev-prompts-btn">
            <button>View Previous Prompts </button>
        </div>

        <div className='todays-prompts'>
            <h3>Answer Today's Daily Prompt:</h3>
            <p className='prompt-title'>{randomPrompts}</p>
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
                        <Link to={`/prompts/${element.id}`}><button className='start-prompt-btn' >Start</button></Link>
                    </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default Prompts