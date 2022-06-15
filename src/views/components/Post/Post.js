import React, { useCallback, useEffect, useState } from "react";
import Comment from "../Comment/Comment";

import { IoFlame } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import stile from "./post.module.css";
import avatarIcon from "../../../assets/img/icon/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import CreateComment from "../CreateComment/CreateComment";
// import { createBlazePost } from "../../../helper/create";
import useComments from "../../../helper/custom/useComments";
import { createBlazesPost, deleteBlazesPost } from "../../../helper/blazes";
import { getBlazesPosts } from "../../../redux/helper/getData";
import {getPhotoUser} from "../../../helper/get";

function Post({_id , id_user , author, content, img, country }) {
  const { blazesPosts, auth } = useSelector((state) => state);
  // console.log("id post:"+_id);
  // console.log("id user:"+ id_user);
  // console.log("id_auth", auth.userInfo)



  // console.log(blazesPosts.data)
  const [comments] = useComments(_id);

  const dispatch = useDispatch();
  const [isBlazed, setIsBlazed] = useState(false);
  const [iconUser, setIconUser] = useState("");


  const getPhoto= useCallback(async(id_user)=>{
    const userPhoto= await getPhotoUser(id_user)
    setIconUser(userPhoto.iconAvatar);
  },[])

  const blazeResolve = useCallback(
    (_id) => {
      const blazeResolved = blazesPosts.data.find((blaze) => {
        
        return blaze.id_post === _id;
        
      });

      if (blazeResolved) setIsBlazed(true);
      if (!blazeResolved) setIsBlazed(false);
    },
    [blazesPosts.data]
  );

  const [showComments, setShowComments] = useState(false);

  const blazeOperation = async () => {
    const control = blazesPosts.data.find((blaze) => blaze.id_post === _id);

    // console.log(control);

    if (!isBlazed) {
      blazeResolve(_id);
      const blaze = await createBlazesPost(auth.userInfo._id, _id);
      dispatch(getBlazesPosts(blaze.id_user));
    } else {
      blazeResolve(_id);
      await deleteBlazesPost(auth.userInfo._id, _id);
      dispatch(getBlazesPosts(auth.userInfo._id));
    }
  };

  useEffect(() => {
    blazeResolve(_id);
    getPhoto(id_user);
  }, [_id, blazeResolve, getPhoto, id_user]);

  return (
    <div className={stile.post}>
      <span className={stile.headPost}>

        {iconUser !== "" ?
       <img className={stile.icon} src={`http://localhost:5000${iconUser}`} alt="Pic" />
      : ""
      }
        
        <Link to={`/dashboard/world/users/${id_user}`} className={stile.author}>
          {" "}
          {author}{" "}
        </Link>
      </span>

      <ins>{country}</ins>

      <Link to={`/dashboard/posts/${_id}`} className={stile.textArticle}>
        <article className={stile.postArticle}>{content}</article>

       {img !== undefined ?
        <img
          src={(img !== undefined) ? `http://localhost:5000${img}` : " "}
          alt="travel"
          className={stile.postImage}
        />  : null
       }
      </Link>
      <span className={stile.footPost}>
        <IoFlame
          style={isBlazed === true ? { backgroundColor: "--blue--green" } : {}}
          className={
            isBlazed === true ? stile.blazeIconBlazed : stile.blazeIcon
          }
          onClick={blazeOperation}
        />

        <FaCommentDots
          className={stile.commentIcon}
          onClick={() => setShowComments(!showComments)}
        />
      </span>

      {showComments === true ? (
        <section className={stile.sectionComments}>
          {comments.map((comment) => (
            <Comment key={comment._id} {...comment} />
          ))}

          <CreateComment id_post={_id} />
        </section>
      ) : null}
    </div>
  );
}

export default Post;
