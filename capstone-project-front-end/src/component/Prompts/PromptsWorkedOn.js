import { Link, useNavigate, useParams } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";
import './PromptsWorkedOn.css'

const API = process.env.REACT_APP_API_URL;
function PromptsWorkedOn() {
    const [promptsWithResponses, setPromptsWithResponses] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios
        .get(`http://localhost:3009/prompts`)
        .then((response) => {
            //PROMPTS THAT HAVE A RESPONSE
            let workedOnPrompts = response.data.filter((element) => element.response.length > 0);

            //IF THERE ARE ANY PROMPTS THAT MEANT THAT CRITERIA, ADD TO ARRAY
            if(workedOnPrompts.length > 0){
                setPromptsWithResponses(workedOnPrompts)
            } else {
                console.log('you have not responded to any prompts yet');
            }
        })
        .catch((e) => console.error("catch", e));
    }, [])

    let currentPrompt = promptsWithResponses[currentIndex];
        
    //PREVIOUS BTN
    function prevPromptBtn() {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        }
    }

    //NEXT BTN
    function nextPromptBtn() {
        if(currentIndex < promptsWithResponses.length -1){
            setCurrentIndex(currentIndex + 1);
        }
    }
  return (
    <div>
        <div className="worked-on-container">
            <div className="worked-on-prev" onClick={prevPromptBtn}> 
            ◀
            </div>
            { currentPrompt &&
                    <div className="indi-worked-on" key={currentPrompt.id}>
                        <h3>{currentPrompt.title}</h3>
                        <h3>Your Response:</h3>
                        <p className="saved-prompt-response"> {currentPrompt.response}
                        <p>Last Edited: {currentPrompt.completion_date}</p></p>

                        <Link className="worked-on-prompts-edit-btn" to={`/prompts/${currentPrompt.id}`}><button>Edit</button></Link>
                    </div>
            }
            <div className="worked-on-next" onClick={nextPromptBtn}> 
            ▶
            </div>
        </div>
    </div>
  )
}

export default PromptsWorkedOn