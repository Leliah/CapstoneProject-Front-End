
import React, { useState, useEffect } from "react";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import profile from "../profile.png"

// const API = process.env.REACT_APP_API_URL
//  || "http:/localhost:3005"
// const API = "http:/localhost:3005"

function Feed() {
  const [feedInput, setFeedInput] = useState("");
  const [previousPosts, setPreviousPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  let navigate = useNavigate();

  //   console.log("API URL:", API);

  useEffect(() => {
    //   console.log("API URL:", API);
    console.log("hello");
    axios
      // .get(`${API}/posts`)

      .get(`http://localhost:3005/posts`) // API HARD CODED FOR NOW

      .then((response) => {
        setPosts(response.data);
        //   console.log("API URL!!:", API);
      })
      .catch((e) => {
        navigate("/not-found");
      });
  }, [navigate]);

  const handleFeedChange = (e) => {
    setFeedInput(e.target.value);
  };

  const handleFeedSubmit = (e) => {
    e.preventDefault();
    console.log({ description: feedInput });
    axios

      .post(`http://localhost:3005/posts`, { description: feedInput })

      .then((response) => {});

    const currentDate = new Date();
    const dateTime = currentDate.toLocaleString();
    const newPost = `${feedInput} - ${dateTime}`;

    setPreviousPosts((prevPosts) => [...prevPosts, newPost]);
    setFeedInput("");
  };
  const handleDelete = (postId) => {
    console.log(`Deleting post with id: ${postId}`);
    axios

      .delete(`http://localhost:3005/posts/${postId}`)

      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((e) => {
        console.error("Error deleting post:", e);
        navigate("/not-found");
      });
  };

  return (
    <nav className="feed">
      <div className="profilefeed">

        <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h2>Gavin</h2>
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
            {previousPosts.map((post, index) => (
              <li className="feedli" key={index}>
                {post}
              </li>
            ))}
          </ul>
          <ul>
            {posts.map((post) => (
              <li className="feedli" key={post.id}>
                {post.description} {post.timestamp}
                <button className="feeddelete" onClick={() => handleDelete(post.id)}> Delete </button>
              </li>
            ))}
          </ul>
          <input className="feedSubmit" type="submit" value="View All Post" />
        </div>
      </div>
    </nav>
=======

        <img className="feedpic" src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h2 className="profile-name">Gavin</h2>
      </div>

        <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <h2 className="profile-name">Gavin</h2>
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
              <li className="feedli" key={index}>
                {post}
              </li>

  
        <div className="post">
          <ul>
            {previousPosts.map((post, index) => (
              <li className="feedli" key={index}>{post}</li>

            ))}
          </ul>
          <ul>
            {posts.map((post) => (
              <li className="feedli" key={post.id}>

                {post.description} {post.timestamp}
                <button className="feeddelete" onClick={() => handleDelete(post.id)}> Delete </button>

                {post.description}  {post.timestamp}

              </li>
            ))}
          </ul>
          <input className="feedSubmit" type="submit" value="View All Post" />
        </div>
      </div>
    </nav>

  );

  );  

}

export default Feed;