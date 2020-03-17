//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from '../../dummy-data';
// import data 
  // set up state for your data
  const PostsPage = () => {
    const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      data.map(p => (
       <Post postData={p} />
      ))}
    </div>
  );
};

export default PostsPage;

