import React from "react";
import styled from "styled-components";
import UsersChat from "./UserChat";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  return (
    <ChatSection>
      <ChatHeader />
      <UsersChat />
      <MessageInput />
    </ChatSection>
  );
};

const ChatSection = styled.div`
  width: 100%;
  min-width: 507px;
  display: flex;
  flex-direction: column;
`;
export default ChatContainer;
