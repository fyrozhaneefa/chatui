import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../slices/SelectedUserSlice";
const MessageInput = () => {
  const selectedUser = useSelector((state) => state.selectedUser);
  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = useState("");

  const handleAddMessage = () => {
    if (newMessage.trim() !== "") {
      const timestamp = new Date().toLocaleTimeString();
      const message = {
        sender: "User",
        message: newMessage,
        timestamp,
        type: 1,
      };

      // Update the chat history for the selected user in selectedUserSlice
      dispatch(addMessage(message));

      // Update the chat history for the corresponding user in userListSlice
      dispatch({
        type: "userList/updateChatHistory",
        payload: { userId: selectedUser.id, message },
      });

      // Simulate a reply message after 1 second
      setTimeout(() => {
        const replyMessage = {
          sender: selectedUser.name,
          message: "Thanks for your message! This is an automated reply.",
          timestamp: new Date().toLocaleTimeString(),
          type: 0,
        };

        // Update the chat history for the selected user in selectedUserSlice
        dispatch(addMessage(replyMessage));

        // Update the chat history for the corresponding user in userListSlice
        dispatch({
          type: "userList/updateChatHistory",
          payload: { userId: selectedUser.id, message: replyMessage },
        });
      }, 1000);

      setNewMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddMessage();
    }
  };

  return (
    <MessageInputContainer>
      <Button aria-label="Emoji">
        <Icon icon="mingcute:emoji-line" color="#808080" width="38" />
      </Button>
      <MessageInputField
        type="text"
        placeholder="Type your message here..."
        value={newMessage}
        onKeyDown={(event) => handleKeyDown(event)}
        onChange={(e) => setNewMessage(e.target.value)}
        aria-label="Message type input field"
      ></MessageInputField>
      <MessageSendIcons>
        <Button type="button" aria-label="Voice recorder">
          <Icon icon="material-symbols:mic" color="gray" width="38" />
        </Button>
        <Button onClick={handleAddMessage} aria-label="Message send button">
          <Icon icon="material-symbols:send" color="gray" width="38" />
        </Button>
      </MessageSendIcons>
    </MessageInputContainer>
  );
};
const MessageInputContainer = styled.div`
  background: #eeeeee;
  height: 60px;
  display: flex;
  gap: 15px;
  align-items: center;
  padding-left: 15px;
  padding-right: 25px;
`;
const MessageInputField = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 30px;
  border: none;
  padding-left: 15px;
  font-size: 16px;
  // outline: none;
  &:focus {
    // outline: none;
  }
`;
const MessageSendIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;
export default MessageInput;
