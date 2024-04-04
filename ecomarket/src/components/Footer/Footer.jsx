import React from "react";
import style from "./Footer.module.css"
import footerLogo from "../../assets/logo_big.png"
import insta from "../../assets/instagram_icon.png"
import pintester from "../../assets/pintester_icon.png"
import whats from "../../assets/whatsapp_icon.png"

const Footer=()=>{
    return(
     <div className={style.footer}>
        <div className={style.logo}>

        <img src={footerLogo} alt="" />
        <p>ECOMARKET</p>
        </div>
        <ul className={style.footerLinks}>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={style.footerIconSocial}>
         <div className={style.footerIconContainer}>
            <img src={insta} alt="" />
         </div>
         <div className={style.footerIconContainer}>
            <img src={pintester} alt="" />
         </div>
         <div className={style.footerIconContainer}>
            <img src={whats} alt="" />
         </div>
        </div>
         <div className={style.copyrigth}>
            <hr />
            <p>Copyright @ 2024 _ All Right Reserved. </p>
         </div>
     </div>
    )
}
export default Footer;
