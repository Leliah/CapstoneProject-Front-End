import React, { useState, useEffect } from "react";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
// console.log(API)
function Feed() {
  const [feedInput, setFeedInput] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
   console.log("API URL:", API);
  useEffect(() => {
    axios
      .get(`${API}/posts`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((e) => {
        navigate("/not-found");
      });
  }, [navigate]);
  console.log("API URL:", `${API}/posts`);
  const handleFeedChange = (e) => {
    setFeedInput(e.target.value);
  };

  const handleFeedSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/posts`, { description: feedInput })
      .then((response) => {
        setPosts((prevPosts) => [...prevPosts, response.data]);
      })
      .catch((error) => {
        console.error("Error submitting post:", error);
      });

    setFeedInput("");
  };

  const handleDelete = (postId) => {
    axios
      .delete(`${API}/posts/${postId}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        navigate("/not-found");
      });
  };

  const handleStartNow = () => {
    navigate("/Prompts");
  };

  return (
    <nav className="feed">
    <div>
      <div className="profilefeed">
        <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
        <h2>Gavin</h2>
      </div>
      <div className="promptsfeed">
        <h2 className="promptslink">DAILY PROMPTS</h2>
        <input
          className="feedSubmitdaily"
          type="submit"
          value="Start Now"
          onClick={handleStartNow}
        />
      </div>
    </div>
      <div className="journal">
        <h2>Journal</h2>
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
            {posts
              .slice(0)
              .reverse()
              .map((post) => (
                <li className="feedli" key={post.id}>
                  {post.description} {post.timestamp}
                  <button
                    className="feeddelete"
                    onClick={() => handleDelete(post.id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
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