import React from "react";
import { FixedSizeList as List } from "react-window";
import styled from "@emotion/styled";
import GoalsBody from "./GoalsBody.js";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

//listview goes here
function GoalsDataModel( title, content ){
  this.title = title;
  this.content = content;
};

var list = [
  new GoalsDataModel("Clean rooms with magic.", ["Buy a broom"]),
  new GoalsDataModel("Walk my doggo.", ["Steal a doggo"]),
  new GoalsDataModel("Finish my essay about burritos", [
    "What is a burrito?",
    " Determine why I need this",
  ]),
];

//inject row data here
const GoalsBodyRenderer = ({ index }) => {
  const GoalsBodyStyle = styled.div`
    padding-bottom: 13px;
  `;

  return (
    <GoalsBodyStyle>
      <GoalsBody
        title={list[index].title}
        id={index}
        content={list[index].content}
      />
    </GoalsBodyStyle>
  );
};

//only concerned about rendering
const VirtualizedList = () => {
  const RenderRowStyle = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 13px;
    padding-left: 21px;
    padding-right: 21px;
  `;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <RenderRowStyle>
          <List
            height={height - 100}
            itemCount={list.length}
            itemSize={10}
            width={width}
          >
            {GoalsBodyRenderer}
          </List>
        </RenderRowStyle>
      )}
    </AutoSizer>
  );
};

export default VirtualizedList;
