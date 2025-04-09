import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
export default function Layout() {
return (
    <>
    <Navbar />
    <main role="main">
    <Outlet/>
    </main>
    <Footer />
    </>
)
}
