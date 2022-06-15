import {createSlice} from "@reduxjs/toolkit";

const blazesSlice= createSlice({
     name:"blazes",
     initialState:{
          data:[],
          isLoad:false,
          isError:false,
     },

     reducers:{
          addBlazesPosts:(state,action)=>{
            state.data=action.payload;
            state.isLoad=true;
            state.isError=false;
          },

          addNewBlaze:(state,action)=>{
               state.data.push(action.payload);
               state.isLoad=true;
               state.isError=false;
             },


          resetBlazes:(state, action)=>{
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


export const {setError, resetBlazes ,addNewBlaze, addBlazesPosts} = blazesSlice.actions;
const {reducer} = blazesSlice;

export default reducer;