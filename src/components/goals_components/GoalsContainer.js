import React from "react";
import styled from "@emotion/styled";
import GoalsTitle from "./GoalsTitle.js";
import VirtualizedList from "./ScrollDemo.js";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { yellow } from "@material-ui/core/colors";
import { colors } from "@material-ui/core";

//return list based on the bool value
const displayList = ({ isShortTerm }) => {
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const GoalsContainerStyle = styled.div`
    padding-top: 8px;
    flex-direction: column;
    min-width: auto;
    margin: 10;
    height: auto;
    background: transparent;
    /* box-shadow: 5px 5px 6px #00000029; */
    border-radius: 30px;
    opacity: 1;
    align-items: center;
    display: flex;
  `;

  const TabStyle = styled.div`
    top: 151px;
    left: 802px;
    width: 148px;
    height: 48px;
    background: #FF9066 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #00000029;
    border-radius: 8px;
    opacity: 1;
    color: white;
  `;

  const DummyTabStyle = styled.div`
    top: 151px;
    left: 802px;
    width: 148px;
    height: 48px;
    background: #5C7CF8 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 10px #00000029;
    border-radius: 8px;
    opacity: 0.5;
    color: white;
  `;

  const OverviewTextStyle = styled.div`
    left: 773px;
    width: 343px;
    height: 57px;
    text-align: left;
    font: Bold 50px/67px Utile;
    letter-spacing: 0px;
    color: #7B9FFE;
    opacity: 1;
    padding-bottom: 76px;
  `;

  //switch tabs based on active tab
  return (
    <>
      <OverviewTextStyle><text>Goals Overview</text></OverviewTextStyle>
      <Tabs
        value={value}
        // indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <TabStyle><Tab label="Short Term" /></TabStyle>
        <span>&emsp;</span>
        <DummyTabStyle><Tab label="Long Term" /></DummyTabStyle>
      </Tabs>

      {<GoalsContainerStyle>{displayList(true)}</GoalsContainerStyle>}

    </>
  );

  // return <GoalsContainerStyle>{displayList(true)}</GoalsContainerStyle>;
};

export default GoalsContainer;
