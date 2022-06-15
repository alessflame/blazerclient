import React from 'react'
import stile from "./comment.module.css"

function Comment({_id, image, username, content}) {
  return (
     <span className={stile.comments}>
     
     <span className={stile.headComment}>
     <img src={image} alt="pin"/>
     <samp>{username}</samp>
     </span>
     <article className={stile.contentComment}>
    {content}</article></span>)
}

export default Comment