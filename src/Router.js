import React , { Suspense }from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages';
import { Navbar } from './Components';
import './i18n';
/* import { createTheme,ThemeProvider } from '@mui/material';

const theme = createTheme(); */

const Router = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter >
                    {/* <ThemeProvider theme={theme}> */}
                        <Navbar/>
                        <Routes>
                            <Route exact path="/" element={<HomePage/>}/>
                        </Routes>
                    {/* </ThemeProvider> */}
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Router;