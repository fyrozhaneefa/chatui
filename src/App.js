import ConversationContainer from "./components/conversation/ConversationContainer";
import ChatContainer from "./components/chat/ChatContainer";
import styled from "styled-components";
import { useSelector } from "react-redux";

function App() {
  const selectedUser = useSelector((state) => state.selectedUser);

  return (
    <MainComponent>
      <ConversationContainer />
      {selectedUser ? (
        <ChatContainer />
      ) : (
        <EmptyChat>Select a Conversation</EmptyChat>
      )}
    </MainComponent>
  );
}
const MainComponent = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const EmptyChat = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 22px;
`;
export default App;
