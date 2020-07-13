import React from "react";
import styled from "@emotion/styled";
import GoalsBody from "./GoalsBody.js";
import { connect } from "react-redux"
import { addGoal } from "../../../redux"
import PopupExampleTrigger from "./GoalComposer"

//inject row data here
const GoalsList = (props) => {
  const GoalsBodyStyle = styled.div`
    padding-top: 13px;
    /* overflow-y: scroll; */
    width: 100%;
    max-height: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 13px;
    padding-left: 21px;
    padding-right: 21px;
  `;

  const RowStyle = styled.div`
    padding-bottom: 13px;
    width: 100%;
  `;

  return (
    //need to pass id as index
    <>
      {/* {
        props.goals.map((item, index) => {
          return (
            <RowStyle key={index}>
              <GoalsBody title={item.goal} id={index} content={item.steps} />
            </RowStyle>
          );
        })
      } */}
      <PopupExampleTrigger/>
    </>
  );
};

/* redux mapping state to props and dispatching of actions */
const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps, null)(GoalsList)
