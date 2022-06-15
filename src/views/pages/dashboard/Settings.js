import React, { useCallback, useEffect, useState } from 'react'
import { Routes, Route} from "react-router-dom" 
import ChoiseTema from '../../components/Settings/ChoiseTema/ChoiseTema'
import NavSettings from '../../components/Settings/NavSettings/NavSettings'
import {getPostsByIdUser} from "../../../helper/get";
import { useSelector } from 'react-redux';
import UpdatePost from '../../components/Settings/UpdatePost/UpdatePost';
import UpdateProfile from '../../components/Settings/UpdateProfile/UpdateProfile';

function Settings() {
  const [posts, setPosts] = useState([])
  

  const {auth} = useSelector(state=>state);

  const fetchPostUser=useCallback(async()=>{
   
      const userPosts= await getPostsByIdUser(auth.userInfo._id)
      setPosts(userPosts);
     
  },[auth.userInfo._id])

  useEffect(()=>{
   fetchPostUser();
    
  },[auth.userInfo._id, fetchPostUser])

  return (
    <div >

   <NavSettings/>

  <Routes>

    <Route exact path='/profile' element={<UpdateProfile/>}/>
    <Route exact path='/posts' element={<UpdatePost posts={posts} />} />
    <Route exact path='/layout' element={<ChoiseTema/>} />

  </Routes>
    

    </div>
  )
}

export default Settings