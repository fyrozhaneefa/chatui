import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../slices/SelectedUserSlice";

import ActionButtonComponent from "../common/ActionButton";

const ConversationUsers = () => {
  const users = useSelector((state) => state.userList);
  const selectedUser = useSelector((state) => state.selectedUser);
  const dispatch = useDispatch();
  const [hoveredUserId, setHoveredUserId] = useState(null);

  const handleUserSelected = (user) => {
    dispatch(selectUser(user));
  };

  const handleKeyDown = (event, user) => {
    if (event.key === "Enter") {
      handleUserSelected(user);
    }
  };

  return (
    <>
      {users.length > 0 ? (
        <ConversationUserContainer>
          {users?.map((user, index) => {
            const lastChat = user.chatHistory?.[user.chatHistory?.length - 1];
            return (
              <ConversationUsersList
                key={user.id}
                onClick={() => handleUserSelected(user)}
                onKeyDown={(event) => handleKeyDown(event, user)}
                $isSelected={selectedUser?.id === user.id}
                tabIndex={0}
                onMouseEnter={() => setHoveredUserId(user.id)}
                onMouseLeave={() => setHoveredUserId(null)}
              >
                <ImageContainer>
                  <UserImage
                    src={user.image}
                    alt={`Profile image of ${user.name}`}
                  ></UserImage>
                </ImageContainer>
                <UserDetail>
                  <div className="user-name">{user.name}</div>
                  <div className="user-lastmsg">
                    {!lastChat ? "No chat found" : lastChat?.message}
                  </div>
                  <div className="border"></div>
                </UserDetail>
                <LastMessageTime>{lastChat?.timestamp}</LastMessageTime>
                <ActionButtonComponent
                  isHovered={hoveredUserId === user.id}
                  hoveredUserId={hoveredUserId}
                />
              </ConversationUsersList>
            );
          })}
        </ConversationUserContainer>
      ) : (
        <EmptyUser>No Results</EmptyUser>
      )}
    </>
  );
};
const EmptyUser = styled.div`
  background: white;
  height: auto;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  font-size: 18px;
  font-weight: 600;
`;
const ConversationUserContainer = styled.div`
  background: white;
  height: calc(100vh - 140px);
  overflow: auto;
`;
const ConversationUsersList = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  cursor: pointer;
  gap: 15px;
  background: ${(props) => (props.$isSelected ? "#e0e3e7" : "")};
  &:hover {
    background: #e0e3e7;
  }
`;
const ImageContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;
const UserImage = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const UserDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  .user-name {
    font-weight: 600;
  }
  .user-lastmsg {
    font-weight: 400;
    color: #595959;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    max-width: 215px;
  }
  .border {
    margin-top: 15px;
    height: 1px;
    background: #e0e3e7;
  }
`;
const LastMessageTime = styled.div`
  font-size: 14px;
  color: #595959;
`;
// const ActionButton = styled.button`
//   display: none;
//   position: absolute;
//   right: 10px;
//   bottom: 20px;
//   transition: 0.3s ease-in-out;
//   border: none;
//   background: inherit;
//   cursor: pointer;
//   z-index: 99;
//   ${ConversationUsersList}:hover & {
//     display: block;
//   }
// `;
export default ConversationUsers;
