import React from "react";
import style from "./Item.module.css"
import { Link } from "react-router-dom";


const Item=(props)=>{
    return(
        <div className={style.item}>
            <p>{props.name}</p>
           <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link> 
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