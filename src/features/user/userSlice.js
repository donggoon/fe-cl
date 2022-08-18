/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    id: '1',
  },
  reducers: {
    userLogin(state, action) {
      state.id = action.payload;
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
