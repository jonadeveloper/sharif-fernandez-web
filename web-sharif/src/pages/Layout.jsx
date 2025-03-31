import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
export default function Layout() {
return (
    <>
    <Navbar />
    <main role="main">
    <Outlet/>
    </main>
    </>
)
}
