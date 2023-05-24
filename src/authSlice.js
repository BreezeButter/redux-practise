import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: "",
  isAdmin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
     console.log(action.payload)
     state.user = action.payload;
     state.token =action.payload.token;
     state.isAdmin= action.payload.isAdmin;
    },
    logout: (state, action) => {
      (state.user = null), (state.token = ""), (state.isAdmin = false);
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

///Async: logic
// const userLogin = async (username,pasword)=>{

//     try{

//     }catch(error){

//     }
// }

//higher order function
export const userLogin = (userID) => {
  return async (dispatch) => {
    const respone = await axios.get(
      `https://jsonplaceholder.typicode.com/users/1`
    );
    // console.log(respone.data)

    const fullname = respone.data.name;
    let user = {
      fname: fullname.split(" ")[0],
      lname: fullname.split(" ")[1],
      token: "mock_token",
      isAdmin: true,
    };
    dispatch(login(user));
  };
};
