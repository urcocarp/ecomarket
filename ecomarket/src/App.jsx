import './App.css'
import NavBar from './components/NavBar/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import Footer from './components/Footer/Footer'
import menBanner from './assets/banner_mens.png'
import womenBanner from './assets/banner_women.png'
import kidsBanner from './assets/banner_kids.png'



function App() {
  const location = useLocation()
  const showFooter = location.pathname !== '/Login'
  console.log(showFooter, location)

  return (
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner={menBanner} category="men"/>}/>
          <Route path="/womens" element={<ShopCategory banner={womenBanner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kidsBanner} category="kid"/>}/>
          <Route path="/product"element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
           {showFooter && <Footer />}
      </div>
    </>
    
  )
}

export default App
