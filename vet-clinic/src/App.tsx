import React from 'react';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="page">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>

    </div>
  );
}

export default App;
