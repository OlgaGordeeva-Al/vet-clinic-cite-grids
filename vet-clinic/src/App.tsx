import React from 'react';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Sidebar></Sidebar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
