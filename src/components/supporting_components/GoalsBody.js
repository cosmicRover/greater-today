import React from 'react'
import styled from '@emotion/styled'

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import logo from "../../logo.svg";

const GoalsBody = ({title, children}) => {

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
        <span>{title}</span>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<logo />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </GoalsBodyStyle>
    );
}

export default GoalsBody;