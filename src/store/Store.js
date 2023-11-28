import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../slices/UserListSlice";
import selectedUserReducer from "../slices/SelectedUserSlice";

const store = configureStore({
  reducer: {
    userList: userListReducer,
    selectedUser: selectedUserReducer,
  },
});

export default store;
