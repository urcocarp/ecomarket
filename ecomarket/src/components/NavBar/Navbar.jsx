import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png"




const NavBar=()=>{
    
    const [menu,setMenu] = useState("shop")

    return (
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
         <ul className={style.navmenu}>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Hombre")}}>Hombre{menu==="Hombre"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mujer")}}>Mujer{menu==="Mujer"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Niños")}}>Niños{menu==="Niños"?<hr/>:<></>}</li>
         </ul>
         <div className={style.navLogincart}>
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className={style.navcartcount}>0</div>
         </div>
      </div>
    )
}

export default NavBar;