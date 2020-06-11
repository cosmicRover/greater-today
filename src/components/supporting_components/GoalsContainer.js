import React from "react";
import styled from "@emotion/styled";
import GoalsTitle from "./GoalsTitle.js";
import VirtualizedList from "./ScrollDemo.js";

//return list based on the bool value
const displayList = ({isShortTerm}) => {
  return isShortTerm ? (
    <>
      <GoalsTitle title="Short Term Goals" />
      <VirtualizedList />
    </>
  ) : (
    <>
      <GoalsTitle title="Long Term Goals" />
      <VirtualizedList />
    </>
  );
};

const GoalsContainer = ({ title }) => {
  const GoalsContainerStyle = styled.div`
    flex-direction: column;
    min-width: 200px;
    margin: 10;
    height: auto;
    background: #fffef0 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 6px #00000029;
    border-radius: 30px;
    opacity: 1;
    align-items: center;
    display: flex;
  `;

  //need to implement tab switching here

  return <GoalsContainerStyle>{displayList(true)}</GoalsContainerStyle>;
};

export default GoalsContainer;
