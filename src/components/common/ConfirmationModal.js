import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 100;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 5px;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  background: ${(props) => (props.$confirm ? "#bf6363" : "none")};
  color: ${(props) => (props.$confirm ? "white" : "black")};
  border-radius: 6px;
  font-weight: 500;
`;

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <div>Are you sure you want to delete?</div>
        <ModalButtonContainer>
          <ModalButton onClick={onClose}>Cancel</ModalButton>
          <ModalButton onClick={onConfirm} $confirm>
            Confirm
          </ModalButton>
        </ModalButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
