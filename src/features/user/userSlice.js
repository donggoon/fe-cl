/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    adminYn: null,
    id: null,
    loginId: null,
    name: null,
    password: null,
  },
  reducers: {
    userLogin(state, action) {
      state.id = action.payload.id;
      state.adminYn = action.payload.admin_yn;
      state.loginId = action.payload.login_id;
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
