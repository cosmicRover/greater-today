import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Icon from "antd/lib/icon";
import ListSort from "./ListSort";

import { version, Progress } from "antd";
import "antd/dist/antd.css";
import "./list.css";


// import { Progress } from 'antd';
const dataArray = [
  {
    icon: "question-circle-o",
    color: "#FF5500",
    title: "Study Chinese",
    text: "Senior Product Designer"
  },
  {
    icon: "plus-circle-o",
    color: "#5FC296",
    title: "Accounting HW",
    text: "chapters 1 and 2"
  },
  {
    icon: "check-circle-o",
    color: "#2DB7F5",
    title: "JS Lecture",
    text: "spend 3 hours in the morning"
  },
  {
    icon: "cross-circle-o",
    color: "#FFAA00",
    title: "Animal Crossing",
    text: "yep."
  }
];
class MainList extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: "list-sort-demo"
  };

  state = {
    show: false
  };

  handleChange = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const { icon, color, title, text } = item;
      return (
        <div key={i} className={`${this.props.className}-list`}>
          <div className={`${this.props.className}-icon`}>
            <Icon type={icon} style={{ color }} />
          </div>
          <div className={`${this.props.className}-text`}>
            <h1>{title}</h1>
            <p>{text}</p>
            <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={99.9}
          />
          </div>
        </div>
      );
    });
    return [

      <div className={`${this.props.className}-wrapper`}>
        <div className={this.props.className}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
          >
            {childrenToRender}
          </ListSort>
        </div>
      </div>
    ];
  }
}

export default MainList;
