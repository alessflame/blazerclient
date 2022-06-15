import { createSlice } from "@reduxjs/toolkit"; 

const usersListSlice= createSlice({
     name:"users",
     initialState:{
          data:[],
          isError:false,
          isLoad:false
     },

     reducers:{
     addUsersList:(state, action)=>{
         state.data= action.payload;
         state.isError=false;
         state.isLoad=true;
     },
     resetUsersList:(state, action)=>{
          state.data= [];
          state.isError=false;
          state.isLoad=false;
     },

     setError:(state, action)=>{
          state.data= [];
          state.isError=true;
          state.isLoad=false;
     },




}

})

const {reducer} = usersListSlice;
export const {setError, addUsersList, resetUsersList} = usersListSlice.actions;

export default reducer;