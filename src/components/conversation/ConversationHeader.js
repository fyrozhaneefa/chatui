import React from "react";

import HeaderImage from "./HeaderImage";
import HeaderIcons from "../common/HeaderIcons";
import styled from "styled-components";

const ConversationHeader = () => {
  return (
    <HeaderComponent>
      <HeaderImage />
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
export default ConversationHeader;
