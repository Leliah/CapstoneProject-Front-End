// Feed.js
import React, { useState, useEffect } from "react";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Feed() {
  const [feedInput, setFeedInput] = useState("");
  const [previousPosts, setPreviousPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("hello");
    axios
      .get(`http://localhost:3335/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((e) => {
        navigate("/not-found");
        console.log(e);
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

      <h2>FEED</h2>
      <form className="feed-post" onSubmit={handleFeedSubmit}>
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
            <li className="feedli" key={index}>
              {post}
            </li>
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
