import { createSlice } from "@reduxjs/toolkit";

const travelsSlice= createSlice({

     name:"travels",
     initialState:{
        data:[],
        isError:false,
        isLoad:false,
   
     },

     reducers:{
        addTravels:(state,action)=>{
           state.data= action.payload;
           state.isError=false;
           state.isLoad=true;
        },

        addNewTravel:(state,action)=>{
         state.data.push(action.payload);
         state.isError=false;
         state.isLoad=true;
        },


        resetTravels:(state,action)=>{
           state.data= [];
           state.isError=false;
           state.isLoad=false;
        },

        setError:(state,action)=>{
         state.data= [];
         state.isError=true;
         state.isLoad=false;
      },
        
     }

 })


 
 export const {setError, resetTravels, addTravels, addNewTravel} = travelsSlice.actions;

 const {reducer} = travelsSlice;
 
 export default reducer;