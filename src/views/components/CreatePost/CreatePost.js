import React, {useRef} from 'react'
import stile from "./createpost.module.css"
import {useDispatch, useSelector} from "react-redux";
import { allCountries } from '../../../json/allCountries';

import {addNewPost} from "../../../redux/slices/postsSlice";

import {CgImage} from "react-icons/cg"
import {createPost as create} from "../../../helper/create";
import { openModal } from '../../../redux/slices/modalSlice';

function CreatePost() {
 const dispatch= useDispatch();
 const formRef= useRef(null);



 const {auth} = useSelector(state=>state)


 const newPost=async(e)=>{
   e.preventDefault();

  const newPost= await create(formRef.current, {id_user:auth.userInfo._id, author: auth.userInfo.fullname});
  formRef.current.reset();

  if(newPost.post){
    dispatch(addNewPost(newPost.post));
  }
  
  dispatch(openModal(newPost.message));
 
 }



  return (
    <div className={stile.createPostBox}>
    <form ref={formRef} id="form" method='POST' className={stile.form} encType="multipart/form-data">
         <textarea name='content' className={stile.textarea} placeholder='cosa vuoi condividere?'>

         </textarea>

         <select className={stile.select} name='country' defaultValue={"Italia"}>
          {allCountries.map((country,index)=>{
          if(country==="Italia"){ return <option key={index} value={country} defaultValue>{country}</option>}
          return <option key={index} value={country}>{country}</option>}
          )}
          </select>
         
         <div className={stile.btnFile}>
          <span  className={stile.iconImage}><CgImage/></span>
         <input name="file" type="file" />
         </div>
         <input type="submit" value="Pubblica" onClick={(e)=>newPost(e)} /> 



         
    </form>
    </div>
  )
}

export default CreatePost