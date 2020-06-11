
import React from "react";
// import SignInPage from "./components/SignInPage.js";
import GoalsContainer from "./components/goals_components/GoalsContainer.js";
import styled from "@emotion/styled";
import ApplicationRoutes from "./components/side_panel_component/ApplicationRoutes";


function App() {
//TODO: Change global fonts

  const AppStyle = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-top: 25px;
    height: 99vh;
    background: #FFFEF0 0% 0% no-repeat padding-box;
  `;

  return (
    // <AuthProvider>
    //   <Router>
    //       <PrivateRoute excat path="/" component={HomePage} />
    //       <Route exact path="/signin" component={SignInPage} />
    //   </Router>
    // </AuthProvider>

    <ApplicationRoutes/>
  );
}

export default App;


