import React from "react";
import style from "./RelatedProduct.module.css";
import data_product from "../../assets/data";
import Item from "../Item/Item"



const RelatedProduct=()=>{
    return (
        <div className={style.relatedProduct}> 
        <h1>Relate Products</h1>
        <hr />
        <div className={style.relatedProductItem}>
         {data_product.map((item, i)=>{
            return <Item
            key={i}
            id={item.id} 
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>

         })}
        </div>
        </div>
    )
}
export default RelatedProduct;
