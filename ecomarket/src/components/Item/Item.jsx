import React from "react";
import style from "./Item.module.css"


const Item=(props)=>{
    return(
        <div className={style.item}>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className={style.itemPrices}></div>
            <div className={style.itemPricesNew}>
                ${props.new_price}
            </div>
            <div className={style.itemPricesOld}>
                ${props.old_price}
            </div>
        </div>
    )
}
export default Item;