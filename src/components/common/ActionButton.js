import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import ConfirmationModal from "./ConfirmationModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../slices/UserListSlice";
import { selectUser } from "../../slices/SelectedUserSlice";

const ActionButtonComponent = ({ isHovered, hoveredUserId }) => {
  const selectedUser = useSelector((state) => state.selectedUser);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDeleteConfirm = (e) => {
    // Perform the delete action
    e.stopPropagation();
    if (selectedUser.id === hoveredUserId) {
      dispatch(selectUser(null));
    }
    dispatch(deleteUser(hoveredUserId));
    // Close the modal after the action is performed
    handleModalClose();
  };

  return (
    <>
      <ActionButton
        isHovered={isHovered}
        onClick={handleButtonClick}
        aria-label="Delete button"
      >
        <Icon icon="typcn:delete-outline" width={25} color="red" />
      </ActionButton>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

const ActionButton = styled.button`
  display: ${(props) => (props.isHovered ? "block" : "none")};
  position: absolute;
  right: 10px;
  bottom: 20px;
  transition: 0.3s ease-in-out;
  border: none;
  background: inherit;
  cursor: pointer;
  z-index: 99;
`;
export default ActionButtonComponent;
