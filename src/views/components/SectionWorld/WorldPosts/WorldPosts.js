import React, {useEffect} from 'react'
import SectionPosts from '../../SectionPost/SectionPosts'
import CreatePost from '../../CreatePost/CreatePost'
import {useDispatch, useSelector} from "react-redux";
import {addPosts} from "../../../../redux/slices/postsSlice"

function WorldPosts() {

  const {posts}= useSelector(state => state);
  

  

  return (
    <div>
      <SectionPosts posts={posts}/>
    </div>
  )
}

export default WorldPosts