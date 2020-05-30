import React from "react";
import styled from "@emotion/styled";

const GoalsTitle = ({ title }) => {
  const GoalsTitleStyle = styled.div`
    top: 339px;
    left: 1045px;
    width: 100%;
    height: 56px;
    background: #5c7cf8 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 6px #00000029;
    border-radius: 25px 25px 0px 0px;
    opacity: 1;

    align-items: center;
    display: flex;
    justify-content: space-around;

    color: white;
    font-size: 22px;
  `;

  return (
    <GoalsTitleStyle>
      <span></span>
      <span>{title}</span>
      <span></span>
    </GoalsTitleStyle>
  );
};

export default GoalsTitle;
