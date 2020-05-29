import React from "react";
import "./Post.css";
import { CommentList } from "../";

const Post = () => (
  <div className="Post">
    <h1>title</h1>
    <p>Body</p>
    <CommentList />
  </div>
);

export default Post;
