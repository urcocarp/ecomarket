import React from "react";
import style from "./Hero.module.css"
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow.png"
import hero_imagen from "../../assets/hero_image.png"

const Hero =()=>{
    return(
        <div className={style.hero}>
            <div className={style.heroLeft}>
              <h2>NEWCOMERS</h2> 
                 <div>
                    <div className={style.handIcon}>
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>colection</p>
                    <p>for everyone!</p>
                 </div>
                 <div className={style.heroLatestBtn}>
                    <div>Latest collection</div>
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
