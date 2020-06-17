import React, { Component }  from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  Layout,  Menu} from "antd";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";
import "./sidebar.css";

import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  TrophyOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class SideNav extends React.Component {
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
      <Sider
      collapsible
      collapsed={this.state.collapsed}
      onCollapse={this.onCollapse}
    >
      <div className="logo" />

     
      <Menu className="menu-theme" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          
          <Link to='/'> <span>Overview</span></Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to='/profilePage'> <span>Profile</span></Link>
     
        </Menu.Item>
        <Menu.Item key="3" icon={<TrophyOutlined />}>
          
          <Link to='/achievements'> <span>Achievements</span></Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          
          <Link to='/friends'> <span>Friends</span></Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<DollarCircleOutlined />}>
          
          <Link to='/store'> <span>Store</span></Link>
        </Menu.Item>
      </Menu>
      </Sider>  
    );
  }
}

export default SideNav;



// import React from "react";
// import "antd/dist/antd.css";
// import "./sidebar.css";
// import { Menu } from "antd";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import { useMediaQuery } from "react-responsive";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import {
//   HomeOutlined,
//   TeamOutlined,
//   UserOutlined,
//   TrophyOutlined,
//   DollarCircleOutlined,
// } from "@ant-design/icons";

// function Meseros() {
//   return <div>Meseros</div>;
// }
// // const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// class SideNav extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = (collapsed) => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     return (
      
//       <Menu className="menu-theme" defaultSelectedKeys={["1"]} mode="inline">
//         <Menu.Item key="1" icon={<HomeOutlined />}>
          
//           <Link to='/'> Overview</Link>
//         </Menu.Item>
//         <Menu.Item key="2" icon={<UserOutlined />}>
//         <Link to='/profilePage'> Profile</Link>
     
//         </Menu.Item>
//         <Menu.Item key="3" icon={<TrophyOutlined />}>
//           Achievements
//         </Menu.Item>
//         <Menu.Item key="4" icon={<TeamOutlined />}>
//           Friends
//         </Menu.Item>
//         <Menu.Item key="5" icon={<DollarCircleOutlined />}>
//           Store
//         </Menu.Item>
//       </Menu>
    
//     );
//   }
// }

// export default SideNav;