import React from "react";
import styled from "@emotion/styled";
import GoalsTitle from "./GoalsTitle.js";
import GoalsBody from "./GoalsBody.js";

//material imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

//listview goes here
const list = ["Clean room", "Walk the dog", "Finish Essay", "Leave planet"];

const GoalsContainer = ({ title }) => {
  const GoalsContainerStyle = styled.div`
    flex-direction: column;
    width: 535px;
    height: 800px;
    background: #f1f3f5 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 6px #00000029;
    border-radius: 30px;
    opacity: 1;
    align-items: center;
    display: flex;
  `;

  const ref = React.useRef()

  //GoalsBody needs to be generated dynamically
  //provide padding for the body
  return (
    <GoalsContainerStyle>
      <GoalsTitle title="Short Term" />
      {/* {list.map((item) => {
        console.log(item);
        return <GoalsBody />;
      })} */}
      <GoalsBody/>
    </GoalsContainerStyle>
  );
};

export default GoalsContainer;
