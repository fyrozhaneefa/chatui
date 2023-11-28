import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
const UsersChat = () => {
  const selectedUser = useSelector((state) => state.selectedUser);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [selectedUser]);
  return (
    <>
      {selectedUser.chatHistory.length > 0 ? (
        <UserChatContainer>
          {selectedUser?.chatHistory?.map((msg, index) => {
            return (
              <UserContainer key={index} $chatType={msg?.type}>
                <UserChatMessages $chatType={msg?.type}>
                  <MessageTail $chatType={msg?.type}>
                    <Icon
                      icon="entypo:triangle-left"
                      className="tail-out"
                      width="38"
                    />
                  </MessageTail>
                  <Messages>{msg?.message}</Messages>
                </UserChatMessages>
              </UserContainer>
            );
          })}
          <div ref={messagesEndRef}></div>
        </UserChatContainer>
      ) : (
        <EmptyChatWindow>No Chat Found</EmptyChatWindow>
      )}
    </>
  );
};

const EmptyChatWindow = styled.div`
  height: calc(100% - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const UserChatContainer = styled.div`
  height: calc(100% - 140px);
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  overflow: auto;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$chatType === 0 ? "flex-start" : "flex-end"};
  color: ${(props) => (props.$chatType === 0 ? "#000" : "#fff")};
`;
const UserChatMessages = styled.div`
  position: relative;
  margin: 15px 40px 20px 40px;
  padding: 15px;
  background: ${(props) => (props.$chatType === 0 ? "#eeeeee" : "#8bb7f7")};
  max-width: 60%;
  border-radius: 20px;
  border-top-left-radius: ${(props) => (props.$chatType === 0 ? "0" : "20px")};
  border-top-right-radius: ${(props) => (props.$chatType === 0 ? "20px" : "0")};
  z-index: 99;
`;
const MessageTail = styled.span`
  position: absolute;
  left: ${(props) => (props.$chatType === 0 ? "-21px" : "")};
  right: ${(props) => (props.$chatType === 0 ? "" : "-21px")};
  rotate: ${(props) => (props.$chatType === 0 ? "0deg" : "180deg")};
  top: -7px;
  .tail-out {
    color: ${(props) => (props.$chatType === 0 ? "#eeeeee" : "#8bb7f7")};
  }
`;
const Messages = styled.div``;
export default UsersChat;
