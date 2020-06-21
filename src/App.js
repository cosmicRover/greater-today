
import React from "react";
// import SignInPage from "./components/SignInPage.js";
import GoalsContainer from "./components/main_components/goals_components/GoalsContainer.js";
import styled from "@emotion/styled";
import ApplicationRoutes from "./components/antd_side_panel_component/ApplicationRoutes";
import SideNav from "./components/antd_side_panel_component/sidebar.js";



function App() {
//TODO: Change global fonts

  const ContentStyle = styled.div`
  
  height: 100vh;
  background: transparent linear-gradient(0deg, #FFFEF0 0%, #9EE8EB 100%) 0% 0% no-repeat padding-box;
`;

  return (
    // <AuthProvider>
    //   <Router>
    //       <PrivateRoute excat path="/" component={HomePage} />
    //       <Route exact path="/signin" component={SignInPage} />
    //   </Router>
    // </AuthProvider>
    
    
    <ApplicationRoutes>
    <SideNav/>
    </ApplicationRoutes>
    
    
    
  );
}

export default App;


