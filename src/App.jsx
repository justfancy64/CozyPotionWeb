import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import HomePage from "./Pages/HomePage.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import LicencePage from "./Pages/LicencePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path="/Licence" element={<LicencePage />} />
    </>,
  ),
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
