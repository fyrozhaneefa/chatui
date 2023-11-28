import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
const HeaderIcons = () => {
  return (
    <HeaderRightIcons>
      <Button aria-label="Refresh">
        <Icon icon="bx:refresh" color="#808080" width="38" />
      </Button>
      <Button aria-label="Message">
        <Icon icon="ic:baseline-message" color="#808080" width="38" />
      </Button>
      <Button aria-label="Menu">
        <Icon icon="material-symbols:menu" color="#808080" width="38" />
      </Button>
    </HeaderRightIcons>
  );
};
const HeaderRightIcons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;
export default HeaderIcons;
