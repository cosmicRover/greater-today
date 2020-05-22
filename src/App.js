import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlareComponent from "flare-react";
import check from './orbis.flr';

function App() {
  return (
    <FlareComponent
      width={1750}
      height={1500}
      animationName="revolution"
      file={check}
    />
  );
}

export default App;
