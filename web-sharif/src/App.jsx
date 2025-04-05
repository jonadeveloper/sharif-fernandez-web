import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import './App.css'
import Home from './pages/home/Home'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      </Route>
      </Routes>
    </Router>
  )
}

export default App
