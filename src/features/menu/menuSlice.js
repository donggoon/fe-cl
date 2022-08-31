/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menus',
  initialState: {
    id: 'Intro',
    name: '시작하기',
    description: '새 테스트 또는 진행하던 테스트를 이어서 시작할 수 있습니다.',
  },
  reducers: {
    menuChanged(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      // state.push({
      //   id: action.payload,
      //   text: action.payload.text,
      //   completed: false,
      // });
    },
  },
});

export const { menuChanged } = menuSlice.actions;
export default menuSlice.reducer;
