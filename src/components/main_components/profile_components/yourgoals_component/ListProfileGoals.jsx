import React from 'react';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import ListSort from '../yourgoals_component/ListSort';
import './ListPRofileGoals.css';
import moment from 'moment';
import {Progress, TimePicker ,Row, Col,Button, PageHeader } from 'antd'
import Rabbit from '../yourgoals_component/images/rabbit.png'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header} = Layout;

const { RangePicker } = TimePicker;
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
        // <PageHeader
        // className="site-page-header"
        // onBack={() => null}
        // title="Title"
        // subTitle="This is a subtitle"
        // />,
        <div key={i} className={`${this.props.className}-list`}>
          <div className={`${this.props.className}-icon`}>
            <Icon type={icon} style={{ color }} />
          </div>
          <div className={`${this.props.className}-text`}>         
          <Row>
          <Col flex="1 1 120px">
            <h1>{title}</h1>
            <p>{text}</p>
            <Progress 
              strokeHeight={5}
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={35.9}
              />  
              <RangePicker 
                defaultValue={moment('HH:mm')}
                bordered={false}
                disabled
              /> 
              <Button type="primary" shape="circle"> M</Button>
              <Button className="long-term" type="primary" shape="circle"> T</Button>
              <Button className="long-term" type="primary" shape="circle"> W</Button>
              <Button className="short-term" type="primary" shape="circle"> T</Button>
              <Button  type="primary" shape="circle"> F</Button>
              <Button className="long-term" type="primary" shape="circle"> S</Button>
              <Button type="primary" shape="circle"> S</Button>
          </Col>
          <Col flex="0 1 100px">  
            <img className="rabbit-goal"src={Rabbit} alt="Logo" />
          </Col>
        </Row>
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