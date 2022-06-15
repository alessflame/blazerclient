import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
     name:"auth",
     initialState:{

          userInfo:"",
          isAuth:false,
          isError:false
     },

     reducers:{

          login:(state, action)=>{
               state.userInfo= action.payload;
               state.isAuth= true;
               state.isError= false;
          },

          logout:(state, action)=>{
               state.userInfo= "";
               state.isAuth= false;
               state.isError= true;
          }

     }
});


export const {login, logout} = authSlice.actions;
const {reducer} = authSlice;
export default reducer;