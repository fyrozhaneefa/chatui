import React from "react";
import profile from "../../assets/profile.jpg";
import styled from "styled-components";
const HeaderImage = () => {
  return (
    <HeaderProfileImage>
      <ProfileImage src={profile} alt="Profile image of owner"></ProfileImage>
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
