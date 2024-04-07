import React from "react";
import style from "./CSS/ShopCategory.module.css"
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdownIcon from "../assets/dropdown_icon.png"
import Item from "../components/Item/Item";


const ShopCategory =(props)=>{
    const {all_product}=useContext(ShopContext)
    return (
        <div className={style.shopCategory}>
            <img className={style.shopcategoryBanner}src={props.banner} alt="" />
            <div className={style.shopCategryIndex}>
                <p>
                    <span>Mostrando 1-12  </span> de 36 productos
                </p>
                <div className={style.shopCategorySort}>
                Ordenar por <img src={dropdownIcon} alt="" />
                </div>
            </div>
            <div className={style.shopCategoryProducts}>
                {all_product.map((item, i)=>{
                    if(props.category===item.category){
                        return <Item 
                        key={i}
                        id={item.id} 
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}/>

                    }else{
                        return null;
                    }
                    
                })}
            </div>
            <div className={style.shopcategoryLoadmore}>
            Explora más
            </div>
        </div>
    )
}

export default ShopCategory;
