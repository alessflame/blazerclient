import axios from "axios";
import { getToken } from "./token";

export const fetchComments= async(id_post)=>{
     //prendo la lista dei commenti dal db
     const commentsPost = await axios.get(`http://localhost:5000/comments/${id_post}`,{
          headers: {
           "Authorization": getToken()
          }
        });
   
     // console.log("ciao", commentsPost.data);
     return commentsPost.data
}


export const getPostsByIdUser=async(id_user)=>{
     //funzione che ritorno tutti i post di un singolo utente
     const postsUser = await axios.get(`http://localhost:5000/posts/author/${id_user}`,{
          headers: {
           "Authorization": getToken()
          }
        });
     
     return postsUser.data;

}


export const getPostById=async(id_post)=>{
     //funzione che ritorno tutti i post di un singolo utente
     const postData = await axios.get(`http://localhost:5000/posts/${id_post}`,{
          headers: {
           "Authorization": getToken()
          }
        });
     
     return postData.data;

}


export const getPhotoUser=async(id_user)=>{
     const user = await axios.get(`http://localhost:5000/users/${id_user}`,{
          headers: {
           "Authorization": getToken()
          }
     })

     return user.data;


}


