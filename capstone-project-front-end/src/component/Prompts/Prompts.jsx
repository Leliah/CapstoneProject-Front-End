import { Link, useNavigate, useParams } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

function Prompts() {
    let navigate = useNavigate();
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:3009/prompts`)
        .then((response) => setPrompts(response.data))
        .catch((e) => console.error("catch", e));
    }, [])

    function handleStartPrompt(event) {
        event.preventDefault()
        navigate(`/prompts/${prompts.id}`)
    }

console.log(prompts.id)
  return (
    <div className='prompts'>
        <div id="prev-prompts-btn">
            <button>View Previous Prompts </button>
        </div>

        <div className='todays-prompts'>
            <h3>Answer Today's Daily Prompt:</h3>
            <p className='prompt-title'></p>
            <button className='start-prompt-btn' onClick={handleStartPrompt}>Start</button>
        </div>

        <div className='more-prompts'>
            <h3>View More Prompts</h3>
            <div className="scrolling-wrapper-flexbox">
                {/* map here */}
                {prompts.map((element) => {
                    return(
                        <div key={element.id} className="daily-prompts">
                        <h4>{element.title}</h4>
                        <button className='start-prompt-btn' onClick={handleStartPrompt}>Start</button>
                    </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default Prompts