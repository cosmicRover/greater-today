import React from "react";
import styled from "@emotion/styled";
import GoalsBody from "./GoalsBody.js";

//listview goes here
function GoalsDataModel(title, content, key) {
  this.title = title;
  this.content = content;
  this.key = key;
}

var list = [
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"], 12),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"], 35),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ], 34),
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"], 99),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"], 84),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ], 99),
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"], 101),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"], 102),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ], 204),
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"], 37),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"], 72),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ], 55),
];

//inject row data here
const GoalsList = ({ index }) => {
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
    <GoalsBodyStyle>
      {
        list.map((item, i) => {
          return (
            <RowStyle key={i}>
              <GoalsBody title={item.title} id={i} content={item.content} />
            </RowStyle>
          );
        })
      }
    </GoalsBodyStyle>
  );
};

export default GoalsList;

// list.map((item, i) => {
//   return (
//     <RowStyle>
//       <GoalsBody title={item.title} id={i} content={item.content} />
//     </RowStyle>
//   );
// })
