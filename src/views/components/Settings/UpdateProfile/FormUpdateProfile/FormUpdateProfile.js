import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import stile from "./formUpdate.module.css"
import {updateUserInfo} from "../../../../../helper/update"
import { login, logout } from '../../../../../redux/slices/authSlice'
import {openModal} from "../../../../../redux/slices/modalSlice";
import {logoutUser} from "../../../../../helper/auth"

function FormUpdateProfile() {

     const {auth} = useSelector(state=>state)
     
     const [description, setDescription]= useState("")
     const [name, setName] = useState("");
     const [surname, setSurname]= useState("");

     const dispatch=useDispatch();


     const formRef= useRef(null)

      const updateUser=async(e)=>{

        e.preventDefault();

      const response= await updateUserInfo(formRef.current, auth.userInfo._id);

      if(response.message){
      dispatch(openModal(response.message));
      dispatch(logoutUser());
      // dispatch(login(response.user));
      }


     }

     useEffect(()=>{
          setDescription(auth.userInfo.description);
          // setUsername(auth.userInfo.username);
          setName(auth.userInfo.fullname.split(" ")[0])
          setSurname(auth.userInfo.fullname.split(" ")[1])
     },[auth.userInfo.description, auth.userInfo.fullname, auth.userInfo.username])
     

  return (
    <form ref={formRef} className={stile.container}>

<label className={stile.label} htmlFor='description'>Descrizione</label>
    <textarea className={stile.textarea} name='description' value={description} onChange={(e)=>setDescription(e.target.value)}>

    </textarea>


    <label className={stile.label} htmlFor='name'>Nome</label>
    <input className={stile.input} name='name' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>


    <label className={stile.label} htmlFor='surname'>Cognome</label>
    <input className={stile.input} name='surname' type="text" value={surname} onChange={(e)=>setSurname(e.target.value)}/>


    <input type="submit" onClick={(e)=> updateUser(e)} />



    </form>
  )
}

export default FormUpdateProfile