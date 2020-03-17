//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../dummy-data";
  // set up state for your data
  const [data] = useState(dummyData);
  console.log(data);
  const PostsPage = () => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      data.map(p => (
        <div className="posts-container-wrapper">
       <Post postData={p} />
       </div>
      ))}
    </div>
  );
};

export default PostsPage;

