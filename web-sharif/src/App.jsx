import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import './App.css'
import Home from './pages/home/Home'
import ArticleDetail from './components/newsCard/NewsCardDetail'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path="/articulo/:id" element={<ArticleDetail />} />
      </Route>
      </Routes>
    </Router>
  )
}

export default App
