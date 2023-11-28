import React from "react";
import ConversationHeader from "./ConversationHeader";
import styled from "styled-components";
import ConversationSearch from "./ConversationSearch";
import ConversationUsers from "./ConversationUsers";
const ConversationContainer = () => {
  return (
    <ConversationSection>
      <ConversationHeader />
      <ConversationSearch />
      <ConversationUsers />
    </ConversationSection>
  );
};

const ConversationSection = styled.div`
  width: 30%;
  min-width: 394px;
  border-right: 1px solid #e0e3e7;
`;
export default ConversationContainer;
