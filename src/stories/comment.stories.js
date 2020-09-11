//Button.stories.js

import React from "react";
import Comment from "../components/Comment";

export default {
  title: "My Button",
  component: Comment,
};

const comments = 
    {username: "jimbob", text: "im a comment"};

export const commentsComponent = () => <Comment comment={comments} />;


 