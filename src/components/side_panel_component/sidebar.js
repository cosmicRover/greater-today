import React from "react";
import "antd/dist/antd.css";
import "./sidebar.css";
import { Menu } from "antd";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useMediaQuery } from "react-responsive";
import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  TrophyOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

// const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SideNav extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Menu className="menu-theme" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Overview
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="3" icon={<TrophyOutlined />}>
          Achievements
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          Friends
        </Menu.Item>
        <Menu.Item key="5" icon={<DollarCircleOutlined />}>
          Store
        </Menu.Item>
      </Menu>
    );
  }
}

export default SideNav;
