import React from "react";

import Post from "../Post/Post.js";
import stile from "./sectionPosts.module.css";
import fotoProva from "../../../assets/img/lake.jpg";

function SectionPosts({ posts, isWrap, message }) {
  return (
    <div className={isWrap === true ? stile.containerWrap : stile.container}>
      {posts.data.map((post) => (
        <Post key={post._id} img={fotoProva} {...post} />
      ))}

      {posts.data.length === 0 ? <b>{message}</b> : " "}
    </div>
  );
}

SectionPosts.defaultProps = {
  isWrap: false,
  message: "Nessun Post pubblicato",
};

export default SectionPosts;
