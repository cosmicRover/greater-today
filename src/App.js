
import React from "react";
import styled from "@emotion/styled";
import ApplicationRoutes from "./components/antd_side_panel_component/ApplicationRoutes";
import SideNav from "./components/antd_side_panel_component/sidebar.js";

/* import redux */
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  //TODO: Change global fonts

  return (

    <Provider store={store}>
      <ApplicationRoutes>
        <SideNav />
      </ApplicationRoutes>
    </Provider>

  );
}

export default App;


// const ContentStyle = styled.div`
  
// height: 100vh;
// background: transparent linear-gradient(0deg, #FFFEF0 0%, #9EE8EB 100%) 0% 0% no-repeat padding-box;
// `;