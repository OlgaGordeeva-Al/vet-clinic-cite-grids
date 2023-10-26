import "./Main.css"
import Laboratory from "./Services/Laboratory/Laboratory";
import Therapy from "./Services/Therapy/Therapy";
import Ophtalmology from "./Services/Ophtalmology/Ophtalmology";

function Main() {
    return (
      <div className="main">
        <Therapy></Therapy>
        <Laboratory></Laboratory>
        <Ophtalmology></Ophtalmology>
      </div>
    );
  }

export default Main;