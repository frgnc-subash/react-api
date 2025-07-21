import React, { Fragment, useEffect, useState } from "react";
import { BASE_URL } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const postData = async () => {
    const payload = {
      userId: 1,
      id: new Date().getTime(),
      title,
      body: description,
    };
    try {
      await axios.post(`${BASE_URL}/posts`, payload);
    } catch (e) {
      console.error("Error posting data:", e);
    }
  };
  const editPost = (id) => {
    const clickedPost = posts.find((post) => post.id === id);
    setTitle(clickedPost.title);
    setDescription(clickedPost.body);
    console.log("Clicked post:", clickedPost);
  };
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`${BASE_URL}/posts`);
      setPosts(response.data);
    };
    fetchPost();
  }, []);
  return (
    <>
      <div>
        <button
          onClick={() => navigate("/users")}
          style={{
            backgroundColor: "magenta",
            padding: "14px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Navigate to users
        </button>
        <input
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={10}
          value={description}
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={postData}>HIT API POST</button>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <Fragment key={post.id}>
              <div
                style={{
                  backgroundColor: "lightgrey",
                  marginBottom: "8px",
                  padding: "8px",
                }}
              >
                {post.title}
                <hr />
                {post.body}
              </div>
              <br />
              <button onClick={() => editPost(post.id)}>Edit</button>
              <button onClick={() => navigate(`post/${post.id}`)}>
                Post Details
              </button>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Post;
