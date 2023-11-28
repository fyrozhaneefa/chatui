import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../dummyData/MockData";

const userListSlice = createSlice({
  name: "userList",
  initialState: mockData.users,
  reducers: {
    filterUsers: (state, action) => {
      const searchText = action.payload.toLowerCase();

      // If the search text is empty, return the original list of users
      if (searchText === "") {
        return mockData.users;
      }
      // Filter users based on the search text
      return mockData.users.filter((user) =>
        user.name.toLowerCase().includes(searchText)
      );
    },

    deleteUser: (state, action) => {
      const userId = action.payload;
      // Remove the user with the specified ID from the user list
      const updatedUserList = state.filter((user) => user.id !== userId);
      return updatedUserList;
    },

    updateChatHistory: (state, action) => {
      const { userId, message } = action.payload;
      const userIndex = state.findIndex((user) => user.id === userId);

      if (userIndex !== -1) {
        // Update the chat history for the corresponding user
        state[userIndex].chatHistory.push(message);
      }
    },
  },
});
export const { filterUsers, deleteUser, updateChatHistory } =
  userListSlice.actions;
export default userListSlice.reducer;
