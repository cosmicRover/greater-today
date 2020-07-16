import React from "react";
import styled from "@emotion/styled";
import left_rab from "../../../assets/goals_assets/left_rab.svg";
import plus_button from '../../../assets/goals_assets/plus_button.svg'
import { connect } from "react-redux"
import { addGoal } from "../../../redux"
import ResponsiveDialog from "./GoalComposer"

/*annoynomous action test */
const foo = () =>{
  console.log("Hello")
}

const GoalsTitle = (props, { title }) => {
  const GoalsTitleStyle = styled.div`
    top: auto;
    left: auto;
    width: 100%;
    height: 56px;
    position: sticky;
    background: #5c7cf8 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 6px #00000029;
    border-radius: 25px 25px 0px 0px;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 24px;
    overflow: hidden;
  `;

  const titleStyle = {
    margin: "7px",
    overflow: "hidden",
  };

  const addButtonStyle = {
    marginTop: "8px",
    marginRight: "16px",
  };

  return (
    <GoalsTitleStyle>
      <span>{<img src={left_rab} alt="Short term goals"></img>}</span>
      <span style={titleStyle}>{title}</span>
      <span style={addButtonStyle} onClick={""}>{<img src={plus_button} alt="Add a goal"></img>}</span>
    </GoalsTitleStyle>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: () => dispatch(addGoal())
  }
}

export default connect(null, mapDispatchToProps)(GoalsTitle)
