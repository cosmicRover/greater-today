import React from 'react';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import ListSort from '../yourgoals_component/ListSort';
import './ListPRofileGoals.css';
import {Progress} from 'antd'

const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'Chinese Class',
    text: 'read 2 chapters',
  },
  {
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Leet Code',
    text: 'do problems',
  },
  {
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Good Weather',
    text: 'would be nice',
  },
  {
    icon: 'cross-circle-o',
    color: '#FFAA00',
    title: 'Accounting',
    text: 'Finish all the hw',
  },
];
export default class ListSortDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const {
        icon, color, title, text,
      } = item;
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
    return (
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
    );
  }
}