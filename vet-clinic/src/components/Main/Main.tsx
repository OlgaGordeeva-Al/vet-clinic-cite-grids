import "./Main.css"
import Laboratory from "./Services/Laboratory/Laboratory";
import Therapy from "./Services/Therapy/Therapy";
import Ophtalmology from "./Services/Ophtalmology/Ophtalmology";
import Surgery from "./Services/Surgery/Surgery";
import AboutUs from "./AboutUs";
import Gallery from "../Gallery/Gallery";

function Main() {
    return (
      <div className="main">
        <AboutUs></AboutUs>
        <Therapy></Therapy>
        <Surgery></Surgery>
        <Ophtalmology></Ophtalmology>
        <Laboratory></Laboratory>
        <Gallery></Gallery>
      </div>
    );
  }

export default Main;