import "../../../App.css";
import React, { useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Navbar from "../../components/Navbar/Navbar";
import Page404 from "../Page404";
import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";
import SinglePost from "../../components/SinglePost/SinglePost";
import World from "./World";
import Settings from "./Settings";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

import { darkMode } from "../../../redux/slices/temaSlice";

// import { addComments } from "../../../redux/slices/commentsSlice";

// import {posts as postsData} from "../../../json/post"
// import {users as userData} from "../../../json/user"
// import {blazes as BlazePostData} from "../../../json/blazePosts";
// import {travels as travelsData} from "../../../json/travel";
// import { comments } from "../../../json/comment";
// import {blazesTravels} from "../../../json/blazeTravels"

// import Modal from "../../components/Modal/Modal";

import {
  getCommentsFetch,
  getPostsFetch,
  getTravelsFetch,
  getUsersFetch,
  getBlazesPosts,
  getBlazesTravels,
} from "../../../redux/helper/getData";

import {
  
} from "../../../redux/helper/getData";

import { login, logout } from "../../../redux/slices/authSlice";

function Dashboard() {
  const { auth, tema, modal } = useSelector((state) => state);

  //faccio dei dispatch generali per recuperare i dati che servono al funzionamento dell'applicativo
  //(users, posts, blazes ecc.)
  const dispatch = useDispatch();
  const dispatchPosts = useCallback(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);
  const dispatchTravels = useCallback(
    () => dispatch(getTravelsFetch()),
    [dispatch]
  );
  const dispatchUsers = useCallback(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);
  const dispatchComments = useCallback(
    () => dispatch(getCommentsFetch()),
    [dispatch]
  );

  const dispatchBlazes = useCallback(() => {
    dispatch(getBlazesPosts(auth.userInfo._id));
    dispatch(getBlazesTravels(auth.userInfo._id));
    // console.log("questi",blazesPosts.data);
  }, [auth.userInfo._id, dispatch]);


  const controlAuth = useCallback(() => {
    if (window.localStorage.getItem("blazerToken")) {
      const decodeJwt = jwt_decode(localStorage.getItem("blazerToken"));
    
      dispatch(login({ ...decodeJwt }));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  const findTemafromStorage = useCallback(() => {
    if (localStorage.getItem("theme") === "dark") dispatch(darkMode(true));
  }, [dispatch]); //gestisco il comportamento del tema

  useEffect(() => {
    dispatchUsers();
    dispatchPosts();
    dispatchBlazes();
    dispatchTravels();
    dispatchComments();

    // dispatchBlazezTravels();

    // console.log(users);
    // console.log(posts);
  }, [dispatchPosts, dispatchTravels, dispatchComments, dispatchUsers, dispatchBlazes, auth.userInfo._id]);

  useEffect(() => {
    // console.log(auth);
    // console.log(tema);
    // console.log({ modal: modal });

    controlAuth();

    findTemafromStorage();
  }, [findTemafromStorage, tema, modal, controlAuth]);

  if (auth.isAuth === false) return <Navigate to="/" />;

  return (
    <div
      className={`dashboardContainer ${
        tema.darkMode === true ? "dark-mode" : "light-mode"
      } `}
    >
      <Navbar />

      <div className="dashboard">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/world/*" element={<World />} />
          <Route exact path="/posts/:id" element={<SinglePost />} />
          <Route exact path="/settings/*" element={<Settings />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
