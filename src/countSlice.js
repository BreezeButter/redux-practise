import { createSlice } from "@reduxjs/toolkit";

const initialCounter = {
  count: 0,
  error: "",
};



export const counterSlice = createSlice({
// 3keys name initial reducer => in this have store and reducer
  //name
  name: "counter",
  initialState: initialCounter,
  /// action will get in reducer
  reducers: {
    inc : (state, action)=>{
      state.count += 1
    },
    dec : (state, action)=>{
      if(state.count == 0)
      return;
      state.count -= 1
    },
    res : (state, action)=>{
      state.count = 0
    },
    incWithNum: (state, action)=>{
      // state.count += action.payload}
      const {value,error} = action.payload;
      state.count +=value;
      state.error = error;
  },
    
}
});








export const { inc,dec,res,incWithNum } = counterSlice.actions

export default counterSlice.reducer;
