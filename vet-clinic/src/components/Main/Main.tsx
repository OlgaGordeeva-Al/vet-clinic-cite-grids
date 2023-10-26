import "./Main.css"
import Laboratory from "./Services/Laboratory/Laboratory";
import Therapy from "./Services/Therapy/Therapy";
import Ophtalmology from "./Services/Ophtalmology/Ophtalmology";
import Surgery from "./Services/Surgery/Surgery";

function Main() {
    return (
      <div className="main">
        <Therapy></Therapy>
        <Surgery></Surgery>
        <Ophtalmology></Ophtalmology>
        <Laboratory></Laboratory>
      </div>
    );
  }

export default Main;