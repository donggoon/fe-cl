/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'histories',
  initialState: {
    categoryId: null,
    categoryNm: null,
    correctCnt: null,
    correctPer: null,
    endDt: null,
    id: null,
    resultDetails: [],
    startDt: null,
    successCd: null,
    successCdNm: null,
    successPer: null,
    totalQCnt: null,
    wrongCnt: null,
    itemsRef: [],
  },
  reducers: {
    initHistory(state, action) {
      state.categoryId = action.payload.category_id;
      state.categoryNm = action.payload.category_nm;
      state.correctCnt = action.payload.correct_cnt;
      state.correctPer = action.payload.correct_per;
      state.endDt = action.payload.end_dt;
      state.id = action.payload.id;
      state.resultDetails = action.payload.resultDetails;
      state.startDt = action.payload.start_dt;
      state.successCd = action.payload.success_cd;
      state.successCdNm = action.payload.success_cd_nm;
      state.successPer = action.payload.success_per;
      state.totalQCnt = action.payload.total_q_cnt;
      state.wrongCnt = action.payload.wrong_cnt;
      state.itemsRef = action.payload.itemsRef;
    },
  },
});

export const { initHistory } = historySlice.actions;
export default historySlice.reducer;
