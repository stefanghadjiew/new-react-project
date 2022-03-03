import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    HomePage, 
    LoginPage,
    SignUpPage,
    PageNotFound,
    PhotosPage,
    ResetPassword
} from './Pages'
import { Loader } from './Components'
import './i18n'
import ScrollToTop from './ScrollToTop'



const AppRouter = () => {
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Router>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/photos" element={<PhotosPage />} />
                        <Route path="/reset-password" element={<ResetPassword/>} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </Suspense>
        </>
    )
}

export default AppRouter
