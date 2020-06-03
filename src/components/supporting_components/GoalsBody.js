import React from "react";
import styled from "@emotion/styled";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import logo from "../../logo.svg";

const GoalsBody = ({ title, id, content }) => {
  const GoalsBodyStyle = styled.div`
    top: 408px;
    left: 1066px;
    width: 95%;
    height: auto;

    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 6px #00000029;
    border-radius: 16px;
    opacity: 1;
  `;

  //ooof gotta refactor and embed in a scroll view
  return (
    <GoalsBodyStyle>
      <span>{}</span>

      <ExpansionPanel
        TransitionProps={{ unmountOnExit: true }}
        onClick={() => console.log(`Clicked on id: ${id}`)}
      >
        <ExpansionPanelSummary
          expandIcon={logo.svg}
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label=""
          />

          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Checkbox />
          <Typography>{content}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </GoalsBodyStyle>
  );
};

export default GoalsBody;
