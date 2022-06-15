import React from "react";

import stile from "./updatePost.module.css";
import SectionUpdatePost from "./SectionUpdatePost/SectionUpdatePost";

function UpdatePost({ posts }) {
  return (
    <div className={stile.container}>

      {posts.length>0 ?  
      posts.map((post) => (
        <SectionUpdatePost key={post._id} post={post} />
      ))
: 
  <h3 className={stile.noposts}>Nussun Post pubblicato</h3>

}
    </div>
  );
}

export default UpdatePost;
