import React from "react";
import styled from "@emotion/styled";

class LevelBarUpdater extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 75
    }
  }

  render() {
    return (
      <div>
        <LevelBar percentage={this.state.percentage} />
      </div>
    )
  }

}

const LevelBarStyle = styled.div`
  height: 20px;
  width: 350px;
  border-radius:50px;
  box-shadow: 0px 3px 5px #6D597A;
`;

const LevelBarFillerStyle = styled.div`
  background: transparent linear-gradient(270deg, #FF9066 0%, #FE8E66 51%, #E56B6F 100%) 0% 0% no-repeat padding-box;
  height:100%;
  border-radius: inherit;
`;

const LevelBar = (props) => {
  return (
    <LevelBarStyle>
      <Filler percentage={props.percentage} />
    </LevelBarStyle>
  )
}


const Filler = (props) => {
  return (
  <LevelBarFillerStyle>
    <div className="filler" style={{ width: props.percentage }}/>
  </LevelBarFillerStyle>
  )
}

export default LevelBar;
