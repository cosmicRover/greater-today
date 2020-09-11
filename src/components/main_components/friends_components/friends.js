import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Avatar} from "antd";
import "antd/dist/antd.css";
import "./Friends.css"
import FriendsChart from './friendsChart'
import {
  Statistic,
  Card,
  Row,
  Col,
  Timeline,
  Drawer,
  Progress,
  Button,
} from "antd";
// This is a test Page - Profile Page will go here!
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const data =[{
  userName: 'Elizabeth Yu'
  }
]

class Friends extends Component {
  state = {
    collapsed: false,
    size: 'large'
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (     

      <Layout style={{ minHeight: "100vh" }}>
        <div>
          <h1 className="title" style={{ color: '#5B7BF8'}}>Leader Board</h1> 
            
             <div className="leader-card">

              <Col span={20}>
              <Card>
                <FriendsChart/>
              </Card>
              </Col>
             </div>

          <h1 className="title" style={{ color: '#5B7BF8'}}>Your Friends</h1> 

            <div className="profile-rows">
               <Row gutter={10}>
                  <Col span={5}>
                    <Card>
                    <Avatar size={40} src="https://thezebra.org/wp-content/uploads/2020/07/Training-Time-Aug2020-GR-with-ball-scaled.jpg" />
                      <Statistic
                        title="Elizabeth Yu"
                        value={456}
                        precision={0}
                        valueStyle={{ color: "#5C7CF8" }}
                        suffix=""
                      />
                    </Card>
                  </Col>
                  <Col span={5}>
                  <Card>
                  <Avatar size={40} src="https://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg" />
                  <Statistic
                    title="John Doe"
                      value={456}
                      precision={0}
                      valueStyle={{ color: "#5C7CF8" }}
                      suffix=""
                    />
                  </Card>
                </Col>
                <Col span={5}>
                <Card>
                <Avatar size={40} src="https://images.unsplash.com/photo-1566903451935-7e8835ed3e97?ixlib=rb-1.2.1&w=1000&q=80" />
                <Statistic
                    title="Michael Phelps"
                    value={456}
                    precision={0}
                    valueStyle={{ color: "#5C7CF8" }}
                    suffix=""
                  />
                </Card>
                </Col>
              </Row>
            </div>    
        </div>
            
     
    </Layout>

    );
  }
}
export default Friends;


// <Card>
// <Row className="buttons">
//   <Button className="button-margin" type="primary" size={size}  >
//   Long Term 
//   </Button>
//   <Button className='button-space' type="primary" size={size} >
//   Short Term 
//   </Button>
// </Row>
//   <Statistic
//     title="Coins"
//     valueStyle={{ color: "#5C7CF8" }}
//     suffix=""
//     size={100}
//   />
// </Card>