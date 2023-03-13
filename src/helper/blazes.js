import axios from "axios";
import { getToken } from "./token";
// import {getBlazesPosts} from "../redux/helper/getData"

export const createBlazesPost = async (id_user, id_post) => {
  //creo un blazePost
  let blaze = { id_user, id_post };

  blaze = JSON.stringify(blaze);
  const request = await axios.post("https://blazerstravels.onrender.com/blazes", blaze, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken()
    },
  });

  const response = request.data;

  console.log(response);

  return response.newBlaze;
};

export const deleteBlazesPost = async (id_user, id_post) => {
  //elimino un blaze post
  // let blaze={id_user, id_post}

  // blaze= JSON.stringify(blaze);
  const request = await axios.delete(
    `https://blazerstravels.onrender.com/blazes/${id_user}/${id_post}`,{
      headers: {
        "Authorization": getToken()
      },
    }
  );

  const response = request.data;

  console.log(response);

  return response.deleteBlaze;
};

export const createBlazeTravel = async (id_user, id_travel) => {
  //creo un blaze travel
  let blaze = { id_user, id_travel };

  blaze = JSON.stringify(blaze);
  const request = await axios.post(
    "https://blazerstravels.onrender.com/blazestravels",
    blaze,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": getToken()
      },
    }
  );

  const response = request.data;

   console.log("blazetravels",response.newBlaze);

  return response.newBlaze;
};

export const deleteBlazesTravel = async (id_user, id_travel) => {
  //elimino un blazetravel
 
  const request = await axios.delete(
    `https://blazerstravels.onrender.com/blazestravels/${id_user}/${id_travel}`,{
      headers: {
        "Authorization": getToken()
      },
    }
  );

  const response = request.data;

//   console.log(response);

  return response.deleteBlaze;
};
