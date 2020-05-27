import React from "react";
import styled from "@emotion/styled";

const SignInPage = () => {
  const SignInPageStyle = styled.div`
    padding-top: 100px;
    position: sticky;
    flex-direction: column;
    display: flex;
    text-align: center;
    justify-content: center;
  `;

  const SignInButtonStyle = styled.button`
    font-size: 55pt;
  `;

  return (
    <SignInPageStyle>
      <SignInButtonStyle onClick={() => _signMeIn()}>
        Sign in with the googs
      </SignInButtonStyle>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </SignInPageStyle>
  );
};

const _signMeIn = () => {
  var firebase = require("firebase");
  var firebaseui = require("firebaseui");

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        console.log("HERE *************");
        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById("loader").style.display = "none";
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInSuccessUrl: "need to listen for auth status",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: "<your-tos-url>",
    // Privacy policy url.
    privacyPolicyUrl: "<your-privacy-policy-url>",
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start("#firebaseui-auth-container", uiConfig);

  console.log("holla");
};

export default SignInPage;
