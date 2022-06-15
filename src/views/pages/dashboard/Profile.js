import React, { useCallback, useEffect, useState } from "react";
import ProfileDescription from "../../components/ProfileDescription/ProfileDescription";
import CreatePost from "../../components/CreatePost/CreatePost";
import { useSelector } from "react-redux";
import SectionPosts from "../../components/SectionPost/SectionPosts";
import SectionTravels from "../../components/SectionTravels/SectionTravels";
import { getPostsByIdUser } from "../../../helper/get";

function Profile() {
  const [showTravels, setShowTravels] = useState(false);
  const [posts, setPost] = useState([]);

  const { auth, travels } = useSelector((state) => state);

  const id = auth.userInfo._id;

  const getPostsUser = useCallback(async () => {
    const postsUser = await getPostsByIdUser(id);
    setPost(postsUser);
  }, [id]);

  useEffect(() => {
    getPostsUser(id);
  }, [id, getPostsUser]);

  const filterTravelsFromProfile = () => {
    const data = travels.data.filter((travel) => travel.id_user === id);
    return { data: data };
  }; //filtraggio dei viaggio dello USER(agenzia) che ha fatto il login

  return (
    <div>
      <ProfileDescription {...auth.userInfo} />
      {auth.userInfo.isAgency === true ? (
        <b onClick={() => setShowTravels(!showTravels)} className="button">
          {showTravels === false ? "mostra viaggi" : "nascondi"}
        </b>
      ) : (
        " "
      )}

      {showTravels === true ? (
        <SectionTravels travels={filterTravelsFromProfile()} isWrap />
      ) : (
        " "
      )}

      <CreatePost />

      <h2 className="textPage">I post che hai pubblicato</h2>
      <SectionPosts posts={{ data: posts }} />
    </div>
  );
}

export default Profile;
