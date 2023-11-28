import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const HeaderImage = () => {
  const selectedUser = useSelector((state) => state.selectedUser);
  return (
    <HeaderProfileImage>
      <ProfileImage
        src={selectedUser.image}
        alt="Profile image of selected user"
      ></ProfileImage>
    </HeaderProfileImage>
  );
};

const HeaderProfileImage = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export default HeaderImage;
