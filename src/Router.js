import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar.jsx';


const Router = () => {
    return (
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;