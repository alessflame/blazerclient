import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/usersListSlice"
import blazesPostsReducer from "./slices/blazesSlice";
import travelsReducer from "./slices/travelsSlice";
import commentsReducer from "./slices/commentsSlice.js";
import blazesTravelsReducer from "./slices/blazesTravelsSlice";
import temaReducer from "./slices/temaSlice";
import modalReducer from "./slices/modalSlice";
import loaderReducer from "./slices/loaderSlice";

const store= configureStore({
     reducer:{
          loader:loaderReducer,
          modal:modalReducer,
          tema: temaReducer,
          comments:commentsReducer,
          blazesPosts:blazesPostsReducer,
          blazesTravels: blazesTravelsReducer,
          travels:travelsReducer,
          users:usersReducer,
          posts: postsReducer,
          auth: authReducer
     }
});


export default store;