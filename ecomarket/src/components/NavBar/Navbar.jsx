import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png"
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";




const NavBar=()=>{
    
    const [menu,setMenu] = useState("shop")

    return (
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} alt="" />
          <p>ECOMARKET</p>
        </div>
         <ul className={style.navmenu}>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Hombre")}}><Link style={{textDecoration:'none'}} to="/mens">Men</Link> {menu==="Hombre"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mujer")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link> {menu==="Mujer"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Niños")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link> {menu==="Niños"?<hr/>:<></>}</li>
         </ul>
         <div className={style.navLogincart}>
           <Link to="./Login"><button>Login</button></Link> 
           <Link to="/cart"><img src={cart_icon} alt="" /></Link> 
            <div className={style.navcartcount}>0</div>
         </div>
      </div>
    )
}

export default NavBar;