import React from "react";
import style from "./Breadcrums.module.css"
import arrow_icon from "../../assets/breadcrum_arrow.png"

const Breadcrums =(props)=>{
    const {product} =props;
    return (
      <h1 className={style.breadcrums}>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
        
      </h1>
    )
}
export default Breadcrums;