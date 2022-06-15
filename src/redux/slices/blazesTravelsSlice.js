import { createSlice } from "@reduxjs/toolkit"
const blazesTravelsSlice= createSlice({

     name:"blazesTravels",
     initialState:{
          data:[],
          isError:false,
          isLoading:false,
     },

     reducers:{

          addBlazesTravels:(state,action)=>{
               state.data= action.payload;
               state.isError=false;
               state.isLoading= true;
          },
          addNewBlazeTravel:(state,action)=>{
               state.data.push(action.payload);
               state.isLoad=true;
               state.isError=false;
             },

          setError:(state)=>{
               state.data=[];
               state.isLoading=false;
               state.isError=true;
          }

     }

})



export const {addBlazesTravels, setError, addNewBlazeTravel} = blazesTravelsSlice.actions;
const {reducer} = blazesTravelsSlice;

export default reducer;