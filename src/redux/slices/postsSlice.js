import {createSlice} from "@reduxjs/toolkit";

const postsSlice= createSlice({
     name:"posts",
     initialState:{
          data:[],
          isError: false,
          isLoad: true
     },
     reducers:{
          addPosts:(state, action)=>{
               state.data= action.payload;
               state.isError=false;
               state.isLoad=true;
          },

          addNewPost:(state,action)=>{
                state.data.push(action.payload);
                state.isError=false;
                state.isLoad=true;

          },

         resetPosts:(state, action)=>{
               state.data=[];
               state.isError=false;
               state.isLoad=false;
          },
          setError:(state, action)=>{
               state.data=[];
               state.isError=true;
               state.isLoad=false;
          }
     }
})


export const {addPosts, deletePosts, addNewPost, setError} = postsSlice.actions;
const {reducer} = postsSlice;

export default reducer;