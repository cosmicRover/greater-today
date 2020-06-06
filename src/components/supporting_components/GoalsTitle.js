import React from "react";
import styled from "@emotion/styled";
import left_rab from "../../assets/left_rab.svg";
import right_rab from "../../assets/right_rab.svg";

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
    display: flex;
    justify-content: space-around;
    color: white;
    font-size: 22px;
  `;

  // var style = {
  //   align-content: "center"
  // }

  return (
    <GoalsTitleStyle>
      <span>{<img src={left_rab}></img>}</span>
      <span>{title}</span>
      <span>{<img src={right_rab}></img>}</span>
    </GoalsTitleStyle>
  );
};

export default GoalsTitle;
