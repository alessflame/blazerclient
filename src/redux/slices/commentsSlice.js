import { createSlice } from "@reduxjs/toolkit";


const commentsSlice= createSlice({

     name:"comments",
     initialState:{
          data:[],
          isError:false,
          isLoading:false,
     },
     reducers:{
          addComments:(state,action)=>{
               state.data= action.payload;
               state.isError=false;
               state.isLoading=true;
          },

          addNewComment:(state,action)=>{
                state.data.push(action.payload);
                state.isError=false;
                state.isLoad=true;

          },
          setError:(state,action)=>{
               state.data= [];
               state.isError=true;
               state.isLoading=false;
          },

     }

});


export const {addComments, addNewComment, setError} = commentsSlice.actions;

const {reducer} = commentsSlice;
export default reducer;


