import axios from "axios"
import { getToken } from "./token";

export const updateUserInfo=async(form, id_user)=>{

     //funzione per modificare i dati di un utente nelle impostazioni
     const formData = new FormData(form);


     const userInfo={
          name: formData.get("name"),
          surname: formData.get("surname"),
          description: formData.get("description"),
     }
     const formJson= JSON.stringify(userInfo);

     const response= await axios.patch(`http://localhost:5000/users/${id_user}`, formJson,
     {headers:{
           'Content-Type': 'application/json',
           "Authorization": getToken()
     }});

     

     // console.log(response.data);
     return response.data;


}