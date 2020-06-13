import React from "react";
import styled from "@emotion/styled";
import GoalsBody from "./GoalsBody.js";

//listview goes here
function GoalsDataModel(title, content) {
  this.title = title;
  this.content = content;
}

var list = [
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"]),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"]),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ]),
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"]),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"]),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ]),
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"]),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"]),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ]),
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"]),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"]),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ]),
];

//inject row data here
const VirtualizedList = ({ index }) => {
  const GoalsBodyStyle = styled.div`
    padding-top: 13px;
    /* overflow-y: scroll; */
    width: 100%;
    height: auto;
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
    <GoalsBodyStyle>
      {list.map((item) => {
        return (
          <RowStyle>
            <GoalsBody title={item.title} id={1} content={item.content} />
          </RowStyle>
        );
      })}
    </GoalsBodyStyle>
  );
};

export default VirtualizedList;
