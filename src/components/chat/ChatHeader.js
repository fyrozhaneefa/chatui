import React from "react";
import { useSelector } from "react-redux";
import HeaderImage from "./HeaderImage";
import styled from "styled-components";
import HeaderIcons from "../common/HeaderIcons";

const ChatHeader = () => {
  const selectedUser = useSelector((state) => state.selectedUser);
  return (
    <HeaderComponent>
      <HeaderDetails>
        <HeaderImage />
        <UserDetails>
          <UserName>{selectedUser.name}</UserName>
          <UserDescription>{selectedUser.description}</UserDescription>
        </UserDetails>
      </HeaderDetails>
      <HeaderIcons />
    </HeaderComponent>
  );
};
const HeaderComponent = styled.div`
  background: #eeeeee;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
const HeaderDetails = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.div`
  font-weight: 600;
`;
const UserDescription = styled.div`
  font-weight: 400;
  color: #4d4d4d;
  font-size: 14px;
`;
export default ChatHeader;
