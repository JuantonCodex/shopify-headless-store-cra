import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'
import Cart from './components/Cart'
import TopRibbon from './components/TopRibbon'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <div className="App">
        <Cart />
        <TopRibbon />
        <NavBar />
        <NavMenu />
        <Routes>
          <Route path="/product/:handle" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
