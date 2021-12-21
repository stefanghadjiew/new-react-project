import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages';
import { Navbar } from './Components';


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;