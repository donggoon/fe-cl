/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quizs',
  initialState: {
    answerSet: '0,0,0,0,0,0',
    categoryId: 3,
    correctSet: '0,0,0,0,0,0',
    endDt: '2022-08-18T06:19:46.644Z',
    id: 172,
    progressSet: '0,0,0,0,0,0',
    questionSet: '1,7,9,11,13,15',
    seq: 107,
    startDt: '2022-08-18T06:19:46.644Z',
    successCd: 'S',
    userId: 1,
  },
  reducers: {
    initQuiz(state, action) {
      state.answerSet = action.payload.answerSet;
      state.categoryId = action.payload.categoryId;
      state.correctSet = action.payload.correctSet;
      state.endDt = action.payload.endDt;
      state.id = action.payload.id;
      state.progressSet = action.payload.progressSet;
      state.questionSet = action.payload.questionSet;
      state.seq = action.payload.seq;
      state.startDt = action.payload.startDt;
      state.successCd = action.payload.successCd;
      state.userId = action.payload.userId;
      // state.push({
      //   id: action.payload,
      //   text: action.payload.text,
      //   completed: false,
      // });
    },
    setAnswerSet(state, action) {
      state.answerSet = action.payload;
    },
    setCorrectSet(state, action) {
      state.correctSet = action.payload;
    },
    setProgressSet(state, action) {
      state.progressSet = action.payload;
    },
  },
});

export const { initQuiz, setAnswerSet, setCorrectSet, setProgressSet } =
  quizSlice.actions;
export default quizSlice.reducer;
