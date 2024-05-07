import { createSlice } from "@reduxjs/toolkit";
// Redux 상태 생성
const initState = {
  count: 0,
};
// Redux Slice 생성
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});
// Redux Actions 내보내기
export const { increament, decreament, reset } = counterSlice.actions;

// Redux Reducer 내보내기
export default counterSlice.reducer;
