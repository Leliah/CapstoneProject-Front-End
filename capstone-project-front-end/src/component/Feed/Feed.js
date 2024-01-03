import React, { useState , useEffect } from "react";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const API = process.env.REACT_APP_API_URL  || "http:/localhost:3005"
// const API = "http:/localhost:3005"

function Feed() {
  const [feedInput, setFeedInput] = useState("");
  const [previousPosts, setPreviousPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate();

//   console.log("API URL:", API);

    useEffect(() => {
    //   console.log("API URL:", API);
      console.log("hello")
      axios
        // .get(`${API}/posts`)
         .get(`http://localhost:3335/posts`) // API HARD CODED FOR NOW 
        .then((response) => {
          setPosts(response.data);
        //   console.log("API URL!!:", API);
        })
        .catch((e) => {
          navigate("/not-found");
          console.log(e)
        });
    }, [navigate]);

  const handleFeedChange = (e) => {
    setFeedInput(e.target.value);
  };

  const handleFeedSubmit = (e) => {
    e.preventDefault();

    
    const currentDate = new Date();
    const dateTime = currentDate.toLocaleString();
    const newPost = `${feedInput} - ${dateTime}`;

    setPreviousPosts((prevPosts) => [...prevPosts, newPost]);
    setFeedInput("");
  };

  return (
    <nav className="feed">
      <div className="profilefeed">
        <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <h2>Gavin</h2>
      </div>
      
      <div className="journal">
        <h2>Feed</h2>
        <form onSubmit={handleFeedSubmit}>
          <input
            className="feedInput"
            type="text"
            placeholder="How are you feeling?"
            value={feedInput}
            onChange={handleFeedChange}
          />
          <input className="feedSubmit" type="submit" value="Post" />
        </form>
  
        <div className="post">
          <ul>
            {previousPosts.map((post, index) => (
              <li className="feedli" key={index}>{post}</li>
            ))}
          </ul>
          <ul>
            {posts.map((post) => (
              <li className="feedli" key={post.id}>
                {post.description}  {post.timestamp}
              </li>
            ))}
          </ul>
          <input className="feedSubmit" type="submit" value="View All Post" />
        </div>
      </div>
    </nav>
  );  
}

export default Feed;