import axios from "axios";
import { logout } from "../redux/slices/authSlice";

export const createUser = async (form, isUser) => {
  //creo un utente
  if (form.get("password") !== form.get("confirmPassword"))
    return {message:"password diverse"};

  let user = {
    username: form.get("username"),
    password: form.get("password"),
    isAgency: !isUser,
    description: "",
    iconAvatar: "/cover/icon/avatar.png",
  };

  if (isUser !== true) {
    user.partitaiva = form.get("partitaiva");
    user.fullname = form.get("name");
  } else {
    user.fullname = `${form.get("name")} ${form.get("surname")}`;
  }

  user = JSON.stringify(user);
  // console.log(user);
  //mando i dati in formato json
  const response = await axios.post(
    "http://localhost:5000/auth/register",
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
  //ritorno il messaggio "utente creato"
};


export const logoutUser=()=>(dispatch)=>{

  localStorage.removeItem("blazerToken");
  dispatch(logout());

}