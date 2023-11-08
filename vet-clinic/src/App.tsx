import React from 'react';
import Main from "./components/Main/RootLayout"
import './App.css';
import Laboratory from "./components/Main/Services/Laboratory/Laboratory";
import Therapy from "./components/Main/Services/Therapy/Therapy";
import Ophtalmology from "./components/Main/Services/Ophtalmology/Ophtalmology";
import Surgery from "./components/Main//Services/Surgery/Surgery";
import AboutUs from "./components/Main/AboutUs";
import Gallery from "./components/Gallery";
import ContactPage from "./components/Main/ContactPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
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
      {
        path: "/contacts",
        element: <ContactPage />,
      },
    ]
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
