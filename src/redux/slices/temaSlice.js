import { createSlice } from "@reduxjs/toolkit";


const temaSlice= createSlice({
     name:"tema",
     initialState:{
          darkMode:false,
          isLoading:false,
          isError:false
     },

     reducers:{

          darkMode:(state,action)=>{
               state.darkMode=action.payload;
               state.isLoading=true;
               state.isError=false
          },
          setError:(state)=>{
               state.darkMode=false;
               state.isLoading=false;
               state.isError=true
          }

     }
})


export const {setError, darkMode} = temaSlice.actions;
const {reducer} = temaSlice;

export default reducer;