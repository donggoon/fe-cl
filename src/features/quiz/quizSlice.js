/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quizs',
  initialState: {
    answerSet: null,
    categoryId: null,
    correctSet: null,
    endDt: null,
    id: null,
    progressSet: null,
    questionSet: null,
    seq: null,
    startDt: null,
    successCd: null,
    userId: null,
    accumSec: 0,
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
      state.accumSec = action.payload.accumSec;
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
    setAccumSec(state, action) {
      state.accumSec = action.payload;
    },
  },
});

export const {
  initQuiz,
  setAnswerSet,
  setCorrectSet,
  setProgressSet,
  setAccumSec,
} = quizSlice.actions;
export default quizSlice.reducer;
