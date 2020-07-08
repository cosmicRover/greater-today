import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Progress} from "antd";
// import SideNav from "../../antd_side_panel_component/sidebar";
import ListSortDemo from '../profile_components/yourgoals_component/ListProfileGoals.jsx'
import '../profile_components/yourgoals_component/profileStats.css'

// import { version } from "antd";
import "antd/dist/antd.css";
import "../profile_components/yourgoals_component/ListPRofileGoals.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class ProfileStats extends Component {

  render() {
    return (     

      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <h1 style={{ color: '#5B7BF8'}}>How do You Use Your Time?</h1>
          <div style={{ padding: 24, minHeight: 600 }}>
                <ListSortDemo/>  
          </div>
        </Content>     
      </Layout>

    );
  }
}
export default ProfileStats;