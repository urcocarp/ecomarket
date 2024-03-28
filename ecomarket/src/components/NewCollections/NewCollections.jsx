import React from "react";
import style from "./NewCollections.module.css"
import new_collections from "../../assets/new_collections"
import Item from "../Item/Item";

const NewCollections =()=>{
    return(
        <div className={style.newCollections}>
            <h1>NUEVA COLECCION</h1>
            <hr />
            <div className={style.collections}>
             {new_collections.map((item,i)=>{
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
export default NewCollections;
