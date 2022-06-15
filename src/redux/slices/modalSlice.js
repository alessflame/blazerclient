import { createSlice } from "@reduxjs/toolkit";

const modalSlice= createSlice({
     name:"modal",
     initialState:{
          message:"",
          isLoad:false,
          isrEror:false
     },

     reducers:{
     
     openModal:(state, action)=>{

          state.message=action.payload;
          state.isLoad=true;
          state.isrEror=false;
     },

     closeModal:(state,action)=>{

          state.message="";
          state.isLoad=false;
          state.isrEror=false;


     }


     
     }
})


export const {openModal, closeModal} = modalSlice.actions;
const {reducer} = modalSlice;

export default reducer