import axios from "axios";
import { addPosts, setError } from "../slices/postsSlice";
import {
  addBlazesPosts,
  setError as blazePostError,
} from "../slices/blazesSlice";
import {
  addBlazesTravels,
  setError as blazeTravelError,
} from "../slices/blazesTravelsSlice";
import { addTravels, setError as travelError } from "../slices/travelsSlice";
import { addUsersList, setError as userError } from "../slices/usersListSlice";
import { addComments, setError as commentError } from "../slices/commentsSlice";
import { getToken } from "../../helper/token";

export const getPostsFetch = () => async (dispatch) => {
  //ritorno la lista di tutti i post -> faccio il dispatch per inserirli nello state

  // console.log("token",getToken());
  try {
    let response = await axios.get("https://blazerstravels.onrender.com/posts",{
      headers: {
       "Authorization": getToken()
      }
    });

    // console.log(response.data);

    // console.log("ciao");

    dispatch(addPosts(response.data));
  } catch (e) {
    dispatch(setError());
  }
};

export const getTravelsFetch = () => async (dispatch) => {
  //lista dei viaggi recuperati e poi inseriti nello state
  try {
    let response = await axios.get("https://blazerstravels.onrender.com/travels",{
      headers: {
       "Authorization": getToken()
      }
    });

    // console.log(response.data);

    dispatch(addTravels(response.data));
  } catch (e) {
    dispatch(travelError());
  }
};

export const getBlazesPosts = (id) => async (dispatch) => {
  //recupero un singolo blazepost

  try {
    const response = await axios.get(`https://blazerstravels.onrender.com/blazes/${id}`,{
      headers: {
       "Authorization": getToken()
      }
    });
    dispatch(addBlazesPosts(response.data));
  } catch (e) {
    blazePostError();
  }
};

export const getBlazesTravels = (id) => async (dispatch) => {
  //recupero un singolo blazetravel

  try {
    const response = await axios.get(
      `https://blazerstravels.onrender.com/blazestravels/${id}`,{
        headers: {
         "Authorization": getToken()
        }
      });
    dispatch(addBlazesTravels(response.data));
  } catch (e) {
    blazeTravelError();
  }
};

export const getUsersFetch = () => async (dispatch) => {
  //recupero la lista degli users e la memorizzo nello state

  try {
    let response = await axios.get("https://blazerstravels.onrender.com/users",{
      headers: {
       "Authorization": getToken()
      }
    });
    // console.log(response.data);

    dispatch(addUsersList(response.data));
  } catch (e) {
    dispatch(userError());
  }
};

export const getCommentsFetch = () => async (dispatch) => {
  //lista dei commenti

  try {
    let response = await axios.get("https://blazerstravels.onrender.com/comments",{
      headers: {
       "Authorization": getToken()
      }
    });

    dispatch(addComments(response.data));
  } catch (e) {
    dispatch(commentError());
  }
};
