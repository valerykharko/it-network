import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
      <Post message="Hi" count="5"/>
      <Post message="Hello" count="7"/>
      </div>
    </div>
  );
};

export default Myposts;
