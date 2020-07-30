import React from "react";
import styled from "@emotion/styled";
import './levelbar.css';

class LevelBarUpdater extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 0.2
    }
  }

  render() {
    return (
      <div>
        <PropsPrinter />
        <LevelBar percentage={this.state.percentage} />
      </div>
    )
  }

}

const LevelBar = (props) => {
  return (
    <div className='level-bar'>
      <Filler percentage={props.percentage} />
    </div>
  )
}

const PropsPrinter = (props) => {
  return(
    console.log(props.percentage)
  )
}


const Filler = (props) => {
  return (
      <div className='filler' style={{width: `${props.percentage}%`}} />
  )
}

export default LevelBar;
