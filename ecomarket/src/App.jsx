import './App.css'
import NavBar from './components/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
  

  return (
    <>
      <div>
        <BrowserRouter>
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
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
