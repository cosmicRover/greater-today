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
import Profile from '../main_components/profile_components/profilePage'
import ProfileStats from '../main_components/profile_components/profileStats'
import Store from '../main_components/store_components/Store'
import Friends from '../main_components/friends_components/friends'
import Achievements from '../main_components/achievements_components/achievements'
import "antd/dist/antd.css";
const { Sider } = Layout;
const { SubMenu } = Menu;
const ContentStyle = styled.div`
 flex-direction: column;
 display: flex;
 align-items: center;
 padding-top: 45px;
 height: 100%;
 width: 100%;
`;

/*always wrap the imported components with content style */
const StyledContainer = (route) => {
  return (
    <GoalsContainer />
  );
}

const StyledProfile = (route) => {
  return (
    <ContentStyle><Profile /></ContentStyle>
  );
}
const StyledStore = (route) => {
  return (
    <ContentStyle><Store /></ContentStyle>
  );
}
const StyledAchievements = (route) => {
  return (
    <ContentStyle><Achievements /></ContentStyle>
  );
}
const StyledFriends = (route) => {
  return (
    <ContentStyle><Friends /></ContentStyle>
  );
}

const StyledProfileStats = (route) => {
  return (
    <ProfileStats />
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
            {/* Guys dont forget to update the keys!*/}
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <HomeOutlined />
                <span>Home</span>
                <Link to="/" />

              </Menu.Item>
              <SubMenu key="sub1" icon={< UserOutlined />} title="Profile">
                <Menu.Item key="2">
                  <span>Profile</span>
                  <Link to="/profile" />
                </Menu.Item>

                <Menu.Item key="3">
                  <span>Your Goals</span>
                  <Link to="/profile-stats" />
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="4">
                <DollarCircleOutlined />
                <span>Store</span>
                <Link to="/store" />
              </Menu.Item>

              <Menu.Item key="5">
                <TrophyOutlined />
                <span>Achievements</span>
                <Link to="/achievements" />
              </Menu.Item>

              <Menu.Item key="6">
                <TeamOutlined />
                <span>Friends</span>
                <Link to="/friends" />
              </Menu.Item>
            </Menu>

          </Sider>
          <Route exact path="/" component={StyledContainer} />
          <Route path="/profile" component={StyledProfile} />
          <Route path="/friends" component={StyledFriends} />
          <Route path="/profile-stats" component={StyledProfileStats} />
          <Route path="/achievements" component={StyledAchievements} />
          <Route path="/store" component={StyledStore} />
        </Layout>
      </Router>
    );
  }
}
export default RouterApp;
