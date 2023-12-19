import React, { useEffect } from 'react';
import Main from "./components/Main/RootLayout/RootLayout"
import './App.css';
import Laboratory from "./components/Main/Services/Laboratory";
import Therapy from "./components/Main/Services/Therapy";
import Ophtalmology from "./components/Main/Services/Ophtalmology";
import Surgery from "./components/Main/Services/Surgery";
import AboutUs from "./components/Main/AboutUs";
import Gallery from "./components/Gallery";
import PriceList from "./components/Main/PriceList";
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
      {
        path: "/price-list",
        element: <PriceList />,
      },
    ]
  },
]);

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
