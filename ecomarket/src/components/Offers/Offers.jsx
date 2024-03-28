import React from "react";
import style from "./Offers.module.css"
import exclusive_image from "../../assets/exclusive_image.png"


const Offers=()=>{
    return(
        <div className={style.offers}>
            <div className={style.offerLeft}>
                <h1>Exclusivo</h1>
                <h1>Ofertas para vos!</h1>
                <p>Solo la mejor seleccion de productos</p>
                <button>Chequealo ahora</button>

            </div>
            <div className={style.offerRight}>
                <img src={exclusive_image} alt="" />

            </div>



        </div>
    )
}
export default Offers;