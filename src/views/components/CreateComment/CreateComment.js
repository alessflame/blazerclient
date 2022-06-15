import React, { useState } from 'react'
import stile from "./createComment.module.css"
import { useRef } from 'react';

import {createComment } from "../../../helper/create";
import { useDispatch, useSelector } from 'react-redux';

import {openModal} from "../../../redux/slices/modalSlice"
import { addNewComment } from '../../../redux/slices/commentsSlice';




function CreateComment({id_post}) {
  const [content, setContent]= useState("");

  const formRef= useRef(null);
  const dispatch= useDispatch();

  const {auth} = useSelector(state=>state)



  const newComment=async(e)=>{
    e.preventDefault();
    console.log("id",id_post)
   const comment= await createComment(formRef.current, auth.userInfo._id, id_post);
   dispatch(addNewComment(comment.comment));
   dispatch(openModal(comment.message));
   setContent("");
  }
 

  return (
     <form ref={formRef}>
     <textarea name="content" value={content} onChange={(e)=>{setContent(e.target.value)}} className={stile.commentTextArea}></textarea>
     <input type="submit" value="commenta" onClick={(e)=>newComment(e)}></input>
   </form>
  )
}

export default CreateComment