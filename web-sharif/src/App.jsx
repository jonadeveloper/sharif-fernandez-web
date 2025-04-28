import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import './App.css'
import Home from './pages/home/Home'
import Concerts from './pages/concerts/Concerts'
import ArticleDetail from './components/newsCard/NewsCardDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/articulo/:id" element={<ArticleDetail />} />
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/conciertos' exact element={<Concerts />} />
        </Route>     
      </Routes>
    </Router>
  )
}

export default App
