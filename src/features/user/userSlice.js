/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    // userid: 'donggunkim',
  },
  reducers: {
    userLogin(state, action) {
      state.userid = action.payload;
      // state.push({
      //   id: action.payload,
      //   text: action.payload.text,
      //   completed: false,
      // });
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
