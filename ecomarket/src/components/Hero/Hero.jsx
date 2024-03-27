import React from "react";
import style from "./Hero.module.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow.png"
import hero_imagen from "../../assets/hero_image.png"

const Hero =()=>{
    return(
        <div className={style.hero}>
            <div className={style.heroLeft}>
              <h2>RECIEN LLEGADOS</h2> 
                 <div>
                    <div className={style.handIcon}>
                        <p>Nueva</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>coleccion</p>
                    <p>Para todos!</p>
                 </div>
                 <div className={style.heroLatestBtn}>
                    <div>Ultima coleccion</div>
                    <img src={arrow_icon} alt="" />
                 </div>
            </div>
            <div className={style.heroRigth}>
                <img src={hero_imagen} alt="" />

            </div>
        </div>
    )
}
export default Hero;
