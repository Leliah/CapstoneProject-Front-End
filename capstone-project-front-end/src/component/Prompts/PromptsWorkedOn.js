import { Link, useNavigate, useParams } from "react-router-dom";
import PromptsResponse from "./PromptsResponse";
import { useState, useEffect } from "react";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;
function PromptsWorkedOn() {
    const [promptsWithResponses, setPromptsWithResponses] = useState([])

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
  return (
    <div>
        <div>
            {
                promptsWithResponses.map((prompt) => (
                    <div key={prompt.id}>
                        <h3>{prompt.title}</h3>
                        <p>Your Response: {prompt.response}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PromptsWorkedOn