/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import menuReducer from '../features/menu/menuSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
  },
});
