import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import styled from "@emotion/styled";
import GoalsBody from "./GoalsBody.js";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

const RenderRowStyle = styled.div`
  width: 100%;
  height: auto;
`;

const RenderRow = ({ key }) => {
  return (
    <RenderRowStyle>
      <ListItem key={key}>
        <GoalsBody />
      </ListItem>
    </RenderRowStyle>
  );
};

// RenderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };

export default function VirtualizedList() {
  return (
      <FixedSizeList height={750} width={500} itemSize={48} itemCount={200}>
        {RenderRow}
      </FixedSizeList>
  );
}
