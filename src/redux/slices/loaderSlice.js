import { createSlice } from "@reduxjs/toolkit";

const loaderSlice= createSlice({

     name:"loader",
     initialState:{
          isLoad:false,
     },

     reducers:{
     
     isLoading:(state, action)=>{
          state.isLoad=true;
     },

     notLoading:(state,action)=>{
          state.isLoad=false;


     }


     
     }
});


export const {isLoading, notLoading} = loaderSlice.actions;
const {reducer} = loaderSlice;

export default reducer

