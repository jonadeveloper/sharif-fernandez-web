import React from 'react'
import Logo from '../../assets/sharifLOGO.webp'
import './LoadingScreen.css'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
    <img src={Logo} alt="logo" className="logo" />
    <div className="reflection" />
  </div>
  )
}
