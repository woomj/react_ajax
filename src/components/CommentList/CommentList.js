import React, { Component } from "react";
import "./CommentList.css";
import { Comment } from "../";

class CommentList extends Component {
  render() {
    return (
      <ul className="CommentList">
        <Comment />
        <Comment />
        <Comment />
      </ul>
    );
  }
}

export default CommentList;
