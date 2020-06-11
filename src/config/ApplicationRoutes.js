import React from 'react';
//import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import '../App.css'
import SideNav from "../components/layouts/sidebar";
import DrawerSection from "../components/layouts/drawer"
import {Layout, Button, Breadcrumb,Drawer, Progress } from 'antd';

const { Header, Content, Sider, Footer} = Layout;

class ApplicationRoutes extends React.Component{

//CODE FOR MENU COLLAPSE BUTTON
 state = {
   collapsed: false,
};

 onCollapse = collapsed => {
  console.log(collapsed);
  this.setState({ collapsed });
};

render(){
  return (
    
    <Layout  style={{ minHeight: '100vh' }}>

  <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
    <div className="logo" /> 
    <SideNav/>
  </Sider>
 
  <Layout className="site-layout">
    <Header className="site-layout-background" style={{ padding: 0 }} />
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Hello Mocha!</Breadcrumb.Item>
      </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        
      <DrawerSection/>
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Greater Today ©2020</Footer>
  </Layout>
  </Layout>
       );
  }
  
};

export default ApplicationRoutes;
// <MediaQuery minDeviceWidth={680}>
// <mobileNav/>
// <div className="logo" /> 
// </MediaQuery>

// <MediaQuery minDeviceWidth={701}>
// <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
//   <div className="logo" /> 
//   <SideNav/>
// </Sider>
// </MediaQuery>