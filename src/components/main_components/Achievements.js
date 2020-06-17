import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu,  } from "antd";
import "antd/dist/antd.css";
import SideNav from "../side_panel_component/sidebar";

// This is a test Page - Profile Page will go here!
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Achievements extends Component {
  state = {
    collapsed: false
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

      <Layout style={{ minHeight: "100vh" }}>
 
    <SideNav/>
     
        <Layout >
          <Content>  
            <div><h1>How is life</h1> </div>
          </Content>
      </Layout>
   
    </Layout>

    );
  }
}
export default Achievements;
