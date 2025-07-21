import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../App";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const POST_URL = `${BASE_URL}/posts/${id}`;
  const [postDetail, setPostDetail] = useState({});
  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const response = await axios.get(POST_URL);
        setPostDetail(response.data);
      };
      getPost();
    }
  }, [id]);
  
  return (
    <div>
      <h1>{postDetail.title}</h1>
      <h3>{postDetail.body}</h3>t
      <h3>This is post is created by {postDetail.userId}</h3>
    </div>
  );
};

export default PostDetails;
