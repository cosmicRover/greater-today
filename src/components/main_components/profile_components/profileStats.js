import React, { Component } from "react";

import moment from 'moment';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout,PageHeader, Avatar, Tabs,DatePicker, Row, Col } from "antd";
import ListSortDemo from '../profile_components/yourgoals_component/ListProfileGoals.jsx'

import '../profile_components/yourgoals_component/profileStats.css'
import "antd/dist/antd.css";
import "../profile_components/yourgoals_component/ListPRofileGoals.css";

const { TabPane } = Tabs;
const { Header, Content, Footer, Sider } = Layout;
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];



class ProfileStats extends Component {

  render() {
    return (     
      <Layout>
        <Content>
       
        <PageHeader className="site-page-header">
            <Row>
              <Col className="your-goals" span={8}>Your Goals</Col>
              <Col span={8}>        
                  <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat}/>
              </Col>
              <Col  className="avatar" span={8}>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3-AFt-tdOvYiplq_4dIxIFpEwgT6tpP7e0w&usqp=CAU" />
              </Col>
            </Row> 
        </PageHeader>
        <h1 className="title" style={{ color: '#5B7BF8'}}>How do You Use Your Time?</h1>
          <div style={{ padding: 24, minHeight: 600 }}>
            <ListSortDemo/>  
          </div>
        </Content>     
      </Layout>
    );
  }
}
export default ProfileStats;
