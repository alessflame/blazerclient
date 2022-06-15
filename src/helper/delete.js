import axios from "axios"
import { getToken } from "./token";

export const deletePost = async(id_post)=>{
//elimino un post
     const response= await axios.delete(`http://localhost:5000/posts/${id_post}`,{
          headers: {
            "Authorization": getToken()
          },
        });
 
     return response.data.message;
     //ritorno il messaggio "post eliminato"

}