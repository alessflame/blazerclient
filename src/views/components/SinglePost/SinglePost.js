import React,{useEffect,useCallback, useState} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../helper/get";
import Post from "../Post/Post";
import stile from "./siglePost.module.css";

function SinglePost() {
  const { id } = useParams();

  const [post, setPost]= useState({});



  const finder = useCallback(async() => {

   const postSelected= await getPostById(String(id));
   setPost(postSelected);
  },[id])

  useEffect(()=>{
   finder();
  
  },[finder])

  return (
    <div className={stile.container}>

 <section className={stile.box}>
  {post._id !== undefined ? 
 <Post key={post._id} id_user={post.id_user} {...post} /> :
 " "

  }
  </section>
    
    </div>
  );
}

export default SinglePost;
