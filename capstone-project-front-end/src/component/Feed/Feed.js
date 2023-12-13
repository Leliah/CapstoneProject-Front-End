// Feed.js

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
         .get(`http://localhost:3005/posts`)
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
    <div className="feed">
      <h2>WELCOME TO THE FEED</h2>
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

      <div>
        <h3>Previous Posts:</h3>
        <ul>
          {previousPosts.map((post, index) => (
            <li className="feedli" key={index}>{post}</li>
          ))}
        </ul>
        <ul>
          {posts.map((post) => (
            <li className="feedli" key={post.id}>
              {post.description} - {post.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Feed;
