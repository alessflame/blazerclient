import axios from "axios";
import { login } from "../slices/authSlice";
import jwt_decode from "jwt-decode";
import {openModal} from "../slices/modalSlice";

export const getAuthUser = (form) => {
  return async (dispatch) => {
    //funzione che si occupa del login-> trova lo username nel db e memorizza i dati non sensibili
    //nello stato globale

   
      let user = {
        username: form.get("username"),
        password: form.get("password"),
      };
     try {
      user = JSON.stringify(user);
      // console.log(user);
      const response = await axios.post("https://blazerstravels.onrender.com/auth", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      //   console.log(response.data);
      
      if(response.data.token){
      window.localStorage.setItem("blazerToken", "beerer "+ response.data.token);
      const decodeJwt=await jwt_decode(response.data.token);
      dispatch(login({ ...decodeJwt }));
      }

      dispatch(openModal(await response.data.message));
      
      //dispatch dell'autenticazione
    } catch (e) {
     dispatch(openModal(e));
    }
  };
};
