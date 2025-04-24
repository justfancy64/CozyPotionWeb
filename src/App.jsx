import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'


import React from 'react'
import HomePage from './Pages/HomePage.jsx'
import MainLayout from './Layouts/MainLayout.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route Path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
        </Route>
    )
);
const App = () => {

    return <RouterProvider router={router} />;

};
export default App
