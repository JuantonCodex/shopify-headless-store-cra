import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import NavBar from './components/NavBar'
import NavMenu from './components/NavMenu'
import Cart from './components/Cart'
function App() {
  return (
    <Router>
      <div className="App">
        <Cart />
        <NavBar />
        <NavMenu />
        <Routes>
          <Route path="/product/:handle" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
