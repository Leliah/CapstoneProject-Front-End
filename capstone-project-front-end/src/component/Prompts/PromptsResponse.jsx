import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PromptsResponse() {
  let { index } = useParams();
  let navigate = useNavigate();
  const [prompts, setPrompts] = useState([])
  
  useEffect(() => {
    axios
    .get(`http://localhost:3009/prompts/${index}`)
    .then((response) => setPrompts(response.data))
    .catch((e) => console.error("catch", e));
}, [])

  return (
    <div className='response'>

        <div className='container'>
        <div className='prompt-crud-nav'>
        <button>✎</button>
        <button>X</button>
      </div>
            <form>
                <p>
                <label htmlFor='prompts-response' style={{color: 'black'}}> Reflect Here: </label>
                </p>
                <textarea rows="4" cols="50">
                    
                </textarea> 
                <br></br>
                <button className='prompts-save-btn'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default PromptsResponse