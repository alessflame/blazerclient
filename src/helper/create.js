

import axios from "axios";
import { getToken } from "./token";

export const createPost = async (form, user) => {
  const formData = new FormData(form);

  // console.log(formData);
  formData.append("id_user", user.id_user);
  formData.append("author", user.author);

  const response = await axios.post("http://localhost:5000/posts", formData ,{
    headers: {
      "Authorization": getToken()
    },
  });

  return response.data;
};

export const createComment = async(form, id_user, id_post)  => {
  const formData = new FormData(form);

  // console.log(formData);

  const comment = {
     id_user:id_user,
     content:formData.get("content")
  };

  const commentJson= JSON.stringify(comment)
  // comment.id_comment= uuidv4();
    
  const response =await axios.post(`http://localhost:5000/comments/${id_post}`, commentJson, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": getToken()

      }
  }  )

  return response.data;
};

export const createTravel=async(form, user, countriesSelected)=>{
     const formData = new FormData(form);

    //  console.log(formData);
     formData.append("id_user", user.id_user);
     formData.append("author", user.author);
     formData.append("countries", countriesSelected);

    //  console.log(formData.get("countries"));
   
     const response = await axios.post("http://localhost:5000/travels", formData ,{
      headers: {
        "Authorization": getToken()
      },
    });
   
     return response.data;
}