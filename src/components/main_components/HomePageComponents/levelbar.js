import React from "react";
import styled from "@emotion/styled";
import './levelbar.css';

//need to make the progress bar responsive
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const ProgressBar = ({percentage}) =>{
  const ProgressBarStyle = styled.button`
  background: linear-gradient(to right, hotpink ${percentage*3-3}px , white 0%);
  width: 300px;
  border-radius: 4px;
  height: 15px;
  position: relative;
  /* &:hover{ ///add hover once text added
    color: black;
  } */
  `;

  return(
  <ProgressBarStyle>
  </ProgressBarStyle>
  );
}

export default ProgressBar;
