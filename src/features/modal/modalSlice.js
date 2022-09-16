/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    confirm: {
      isShow: false,
      title: '확인',
      message: '',
      callback: () => {},
    },
    alert: {
      isShow: false,
      title: '알림',
      message: '',
      callback: () => {},
    },
  },
  reducers: {
    showConfirm(state, action) {
      state.confirm = action.payload;
    },
    showAlert(state, action) {
      state.alert = action.payload;
    },
    cancelConfirm(state) {
      state.confirm = {
        isShow: false,
        title: '확인',
        message: '',
        callback: () => {},
      };
    },
    cancelAlert(state) {
      state.alert = {
        isShow: false,
        title: '알림',
        message: '',
        callback: () => {},
      };
    },
  },
});

export const { showConfirm, showAlert, cancelAlert, cancelConfirm } =
  modalSlice.actions;
export default modalSlice.reducer;
