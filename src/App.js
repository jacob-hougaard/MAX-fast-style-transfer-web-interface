import React from 'react';
import logo from './logo.svg';
import './App.css';
import CamView from "./views/CamView";
import './index.scss';

function App() {
  return (
    <div className="App">
      <br/>
      <div style={{height:"24%",color:"white", fontFamily: "IBM Plex Sans, Helvetica Neue, Arial, sans-serif"}}>
        <h1>Fast style transfer</h1>
        <p>Click on one of the paintings to get a snapshot in that style</p>
      </div>
      <CamView/>
    </div>
  );
}

export default App;
