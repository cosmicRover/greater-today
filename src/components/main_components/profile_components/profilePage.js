import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu,  } from "antd";
import "antd/dist/antd.css";


// This is a test Page - Profile Page will go here!
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Profile extends Component {
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

            <div><h1>profile</h1> </div>
     
    </Layout>

    );
  }
}
export default Profile;