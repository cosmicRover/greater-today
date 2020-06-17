import React , { Component } from 'react';
import GoalsContainer from './GoalsContainer';
import SideNav from '../side_panel_component/sidebar'
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import styled from "@emotion/styled";

const ContentStyle = styled.div`
 flex-direction: column;
 display: flex;
 align-items: center;
 padding-top: 25px;
 height: 100%;
 background: transparent linear-gradient(0deg, #FFFEF0 0%, #9EE8EB 100%) 0% 0% no-repeat padding-box;
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
        <Layout style={{ minHeight: "100vh" }}>

      <SideNav/>
        
        <Layout >
        <Content>  
          <ContentStyle>
            <GoalsContainer />
            
          </ContentStyle>
        </Content>
      </Layout>
     
      </Layout>
      
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