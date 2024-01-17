import { Link, useNavigate, useParams  } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";
import './PromptsWorkedOn.css'

const API = process.env.REACT_APP_API_URL;
function PromptsWorkedOn() {
    const [promptsWithResponses, setPromptsWithResponses] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
  let { index } = useParams();

    

    useEffect(() => {
        console.log("useEffect function")
        axios
        .get(`${API}/prompts`)
        .then((response) => {
            //PROMPTS THAT HAVE A RESPONSE
            let workedOnPrompts = response.data.filter((element) => element.response.length > 0);
              console.log(workedOnPrompts)
              console.log(response.data)
            //IF THERE ARE ANY PROMPTS THAT MEANT THAT CRITERIA, ADD TO ARRAY
            if(workedOnPrompts.length > 0){
                setPromptsWithResponses(workedOnPrompts)
            } else {
                console.log('you have not responded to any prompts yet');
            }
        })
        .catch((e) => console.error("catch", e));
    }, [])
//   console.log(promptsWithResponses)
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
   // DELETE BTN
   const handleDelete = () => {
    axios
      .delete(`${API}/prompts/${currentPrompt.id}`)
      .then(() => {
        console.log('deleted!')
        navigate("/prompts");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div>
        <h1 className="worked-on">Previous Prompts:</h1>
        <div className="worked-on-container">
            { currentPrompt &&
                <div className="indi-worked-on" key={currentPrompt.id}>
                    <h3>{currentPrompt.prompt}</h3>
                    <div style={{"display" : "flex", "alignItems" : "center"}}>
                        <div className="worked-on-prev" onClick={prevPromptBtn}>◀</div>
                        <div className="worked-on-text">
                            <p className="saved-prompt-response"> {currentPrompt.response}</p>
                        </div>
                        <div className="worked-on-next" onClick={nextPromptBtn}>▶</div>
                    </div>
                    <div className="previous-prompt-buttons">
                        <p className="last-edited">Last Edited: {currentPrompt.completion_date}</p>
                        <button key={currentPrompt.id} onClick={handleDelete}>Delete</button>
                        <Link to={`/prompts/${currentPrompt.id}`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default PromptsWorkedOn









