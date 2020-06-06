import React from "react";
import styled from "@emotion/styled";
import GoalsTitle from "./GoalsTitle.js";
import VirtualizedList from "./ScrollDemo.js";

const GoalsContainer = ({ title }) => {
  const GoalsContainerStyle = styled.div`
    flex-direction: column;
    min-width: 535px;
    height: 100vh;
    background: #f1f3f5 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 6px #00000029;
    border-radius: 30px;
    opacity: 1;
    align-items: center;
    display: flex;
  `;

  return (
    <GoalsContainerStyle>
      <GoalsTitle title="Short Term" />

      <VirtualizedList />
    </GoalsContainerStyle>
  );
};

export default GoalsContainer;
