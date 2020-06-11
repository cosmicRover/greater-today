import React from "react";
//import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import "../App.css";
import SideNav from "./sidebar";
import DrawerSection from "./drawer";
import { Layout, Button, Breadcrumb, Drawer, Progress } from "antd";
import GoalsContainer from '../goals_components/GoalsContainer'
import styled from '@emotion/styled'

const { Header, Content, Sider, Footer } = Layout;

const AppStyle = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 25px;
  height: 99vh;
  background: #fffef0 0% 0% no-repeat padding-box;
`;

class ApplicationRoutes extends React.Component {
  //CODE FOR MENU COLLAPSE BUTTON
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <SideNav />
        </Sider>
      </Layout>
    );
  }
}

export default ApplicationRoutes;
