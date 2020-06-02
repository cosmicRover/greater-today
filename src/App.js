//import React from "react";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignInPage from "./components/SignInPage.js";
import HomePage from "./components/HomePage";
import PrivateRoute from "./routing/PrivateRoute.js";
//import DrawerPage from "./components/DrawerPage.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AuthProvider } from "./services/Auth.js";


import { Button ,  Drawer} from 'antd';
import './App.css';

// function App() {
  const App = () => {
    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  
    return (
  <div>
      <Button type="primary" onClick={showDrawer}>
      Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  </div>
    );
  };
export default App;
