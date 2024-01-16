import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import './PromptsResponse.css';

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

  //let responseValue = responseRef.current.value
  axios
    .put(`${API}/prompts/${index}`, updateResponse)
    .then((response) => {
      console.log('Response from server:', response.data);
      navigate(`/prompts/my-prompts`);
    })
    .catch((e) => console.error("catch", e));

    responseRef.current.value = ''
};

  return (
    <div className='response'>
      <h1>Edit Entry</h1>
      <div className="response-container">
          <h3>{prompts.prompt}</h3>
          <form onSubmit={handleSubmit}>
            <textarea rows="4" cols="50" ref={responseRef} onChange={handleTextChange} id="response" value={prompts.response}  type="text" /> 
            <div className="prompts-response-buttons">
              <button className='prompts-save-btn'>Save</button>
            </div>
          </form>
          </div>
    </div>
  )
}

export default PromptsResponse