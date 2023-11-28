import { createSlice } from "@reduxjs/toolkit";

const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: null,
  reducers: {
    selectUser: (state, action) => action.payload,
    addMessage: (state, action) => {
      if (state) {
        state.chatHistory.push(action.payload);
      }
    },
  },
});

export const { selectUser, addMessage } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
