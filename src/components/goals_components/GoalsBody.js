import React from "react";
import styled from "@emotion/styled";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import expansion_button from '../../assets/group.svg'

const GoalsBody = ({ title, id, content }) => {
  //edit this for expansion issues
  const GoalsBodyStyle = styled.div`
    width: 100%;
    height: auto;
    box-shadow: 0px 5px 6px #00000029;
    border-radius: 16px;
    opacity: 1;
  `;

  const ExpansionPanelStyle = {
    borderRadius: "16px",
  };

  const GoalsCheckboxStyle = styled.div`
    padding-left: 8px;
    border: 'none';
  `;

  //ooof gotta refactor and embed in a scroll view
  return (
    <GoalsBodyStyle>
      {/* <span>{<text>Hello</text>}</span> */}

      <ExpansionPanel
        style={ExpansionPanelStyle}
        TransitionProps={{ unmountOnExit: true }}
        onClick={() => console.log(`Clicked on id: ${id}`)}
      >
        <ExpansionPanelSummary
          expandIcon={<img src={expansion_button} width={25} height={19}></img>}
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label={title}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GoalsCheckboxStyle>
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label={content}
            />
          </GoalsCheckboxStyle>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </GoalsBodyStyle>
  );
};

export default GoalsBody;
