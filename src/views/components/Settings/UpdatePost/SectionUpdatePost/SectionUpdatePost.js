import React, { useState } from "react";
import stile from "../updatePost.module.css";
import { FiSettings } from "react-icons/fi";
import Post from "../../../Post/Post";
import { deletePost } from "../../../../../helper/delete";
import { openModal } from "../../../../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



function SectionUpdatePost({ post }) {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
const navigate= useNavigate();

  const requestDelete = async (id_post) => {
    const message = await deletePost(id_post);
    // console.log(message);
    dispatch(openModal(message));
    return navigate("/")
    
  };

  return (
    <section className={stile.section}>
      <Post  {...post} />
      <span className={stile.spanIcon}>
        <FiSettings
          className={stile.icon}
          onClick={() => setShowButton(!showButton)}
        />
        {showButton === true ? (
          <b
            onClick={() => {
              requestDelete(post._id);
            }}
            className="button"
          >
            Elimina
          </b>
        ) : null}
      </span>
    </section>
  );
}

export default SectionUpdatePost;
