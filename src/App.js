
import React from "react";
// import SignInPage from "./components/SignInPage.js";
import GoalsContainer from "./components/goals_components/GoalsContainer.js";
import styled from "@emotion/styled";
import ApplicationRoutes from "./components/side_panel_component/ApplicationRoutes";
import ProfilePage from "./components/main_components/ProfilePage";
import HomePage from "./components/main_components/HomePage";


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

      //<ApplicationRoutes />
      <HomePage />
      //<ProfilePage />

  );
}

export default App;
