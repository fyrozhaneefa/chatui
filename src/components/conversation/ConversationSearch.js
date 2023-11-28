import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { filterUsers } from "../../slices/UserListSlice";

const ConversationSearch = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);

    // Dispatch the filterUsers action with the new search text
    dispatch(filterUsers(newSearchText));
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchText}
        onChange={handleSearch}
        aria-label="Search conversation users"
      ></SearchInput>
      <Icon
        icon="mdi:magnify"
        color="#847979"
        width="25"
        className="search-icon"
      />
    </SearchContainer>
  );
};
const SearchContainer = styled.div`
  position: relative;
  background: #fafafa;
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  .search-icon {
    position: absolute;
    padding-left: 10px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  border: none;
  padding-left: 50px;
  font-size: 16px;
  // outline: none;
  &:focus-visible {
    // outline: none;
  }
`;
export default ConversationSearch;
