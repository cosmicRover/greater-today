import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import styled from '@emotion/styled'

import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  TrophyOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";


import GoalsContainer from '../main_components/goals_components/GoalsContainer'
import Store from '../main_components/store_components/Store'
import "antd/dist/antd.css";
const { Sider } = Layout;

const ContentStyle = styled.div`
 flex-direction: column;
 display: flex;
 align-items: center;
 padding-top: 25px;
 height: 100%;
 width: 100%;
 background: transparent linear-gradient(0deg, #FFFEF0 0%, #9EE8EB 100%) 0% 0% no-repeat padding-box;
`;

/*always wrap the imported components with content style */
const StyledContainer = (route) => {
  return (
    <ContentStyle><GoalsContainer /></ContentStyle>
  );
}

const StyledStore = (route) => {
  return (
    <ContentStyle><Store /></ContentStyle>
  );
}

class RouterApp extends Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >

            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <HomeOutlined />
                <span>Home</span>
                <Link to="/" />

              </Menu.Item>
              <Menu.Item key="2">
                <TeamOutlined />
                <span>Store</span>
                <Link to="/store" />
              </Menu.Item>
            </Menu>

          </Sider>
          <Route exact path="/" component={StyledContainer} />
          {/* <Route path="/profilePage" component={ProfilePage} />
          <Route path="/friends" component={Friends} />
          <Route path="/achievements" component={Achievements} /> */}
          <Route path="/store" component={StyledStore} />
        </Layout>
      </Router>
    );
  }
}
export default RouterApp;
