import { Outlet } from "react-router-dom";
import "./RootLayout.css"
import "../../App.css";
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Footer from '../Footer/Footer';

function Main() {
    return (
      <div className="page" id="page">
        <Header />
        <Sidebar />
        <div className="main">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }

export default Main;