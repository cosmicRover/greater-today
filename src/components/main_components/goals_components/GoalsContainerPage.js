import React , { Component } from 'react';
import GoalsContainer from './GoalsContainer';
import SideNav from '../../antd_side_panel_component/sidebar'
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import styled from "@emotion/styled";

const ContentStyle = styled.div`
flex-direction: column;
display: flex;
align-items: center;
padding-top: 45px;
height: 100%;
width: 100%;
 background: url("../goals_component/images/background.png");
`;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class GoalsContainerPage extends Component {

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
      <ContentStyle>
          <Layout >
          <SideNav/>
        </Layout>
      
      </ContentStyle>

      
    );
  }
}

export default GoalsContainerPage;
// <Link to='/'/>

// <Link to='/'>
// <Layout style={{ minHeight: "100vh" }}>
// <Layout >
// <Content>  
//   <ContentStyle>
//     <GoalsContainer />
    
//   </ContentStyle>
// </Content>
// </Layout>

// </Layout>
// </Link>