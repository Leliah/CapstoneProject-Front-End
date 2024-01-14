import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function PromptsResponse() {
  let { index } = useParams();
  let navigate = useNavigate();
  let responseRef = useRef()
  const [prompts, setPrompts] = useState({
    category: '',
    prompt: '',
    title: '',
    response: '',
    is_completed: false,
    completion_date: ''
  })
  
  const handleTextChange = (event) => {
    setPrompts({ ...prompts, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
    .get(`${API}/prompts/${index}`)
    .then((response) => setPrompts(response.data))
    .catch((e) => console.error("catch", e));
}, [])

const handleSubmit = (event) => {
  event.preventDefault();
  updatePrompt(prompts, index);
};

const updatePrompt = (updateResponse) => {
  console.log('Updated Prompt:', updateResponse);

  //let responseValue = responseRef.current.value
  axios
    .put(`${API}/prompts/${index}`, updateResponse)
    .then((response) => {
      console.log('Response from server:', response.data);
      console.log('saved!')
      // navigate(`/prompt/${index}`);
    })
    .catch((e) => console.error("catch", e));

    alert('Your response has been saved!')
    responseRef.current.value = ''
};

  return (
    <div className='response'>

        <div className='container'>
        <div className='prompt-crud-nav'>
        {/* <button>✎</button>
        <button>X</button> */}
      </div>
            <form onSubmit={handleSubmit}>
                <p>
                {/* <label htmlFor='prompts-response' style={{color: 'black'}}> Reflect Here: </label> */}
                </p>
                <h3 className="title">{prompts.title}</h3>
                <p> {prompts.prompt}</p>
                <textarea rows="4" cols="50" ref={responseRef} onChange={handleTextChange} id="response" value={prompts.response}  type="text">
                    
                </textarea> 
                <br></br>
                <button className='prompts-save-btn'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default PromptsResponse