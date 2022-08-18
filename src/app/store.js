/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import menuReducer from '../features/menu/menuSlice';
import quizReducer from '../features/quiz/quizSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    quiz: quizReducer,
  },
});
