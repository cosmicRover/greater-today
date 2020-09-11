import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Menu} from "antd";
// import {Button, Breadcrumb, Drawer, Progress } from "antd";

import SideNav from "./sidebar";
import DrawerSection from "./drawer";
import ProfilePage from '../main_components/profilePage'
import Overview from '../goals_components/GoalsContainerPage'
import Store from '../main_components/Store'
import Achievements from '../main_components/Achievements'
import Friends from '../main_components/friends_component/Friends'

import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

class RouterApp extends Component {
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
      <BrowserRouter>
        <div>
          <Switch>
            <Route  exact path='/' component={Overview} />
            <Route   path="/profilePage" component={ProfilePage}/> 
            <Route   path="/friends" component={Friends}/> 
            <Route   path="/achievements" component={Achievements}/>
            <Route   path="/store" component={Store}/>
        </Switch> 
        </div>      
      </BrowserRouter>   
    );
  }
}
export default RouterApp;
