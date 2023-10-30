import "./Main.css"
import Laboratory from "./Services/Laboratory/Laboratory";
import Therapy from "./Services/Therapy/Therapy";
import Ophtalmology from "./Services/Ophtalmology/Ophtalmology";
import Surgery from "./Services/Surgery/Surgery";
import AboutUs from "./AboutUs";
import Gallery from "../Gallery/Gallery";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutUs />,
  },
  {
    path: "/therapy",
    element: <Therapy />,
  },
  {
    path: "/surgery",
    element: <Surgery />,
  },
  {
    path: "/ophtalmology",
    element: <Ophtalmology />,
  },
  {
    path: "/laboratory",
    element: <Laboratory />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

function Main() {
    return (
      <div className="main">
        <RouterProvider router={router} />
      </div>
    );
  }

export default Main;