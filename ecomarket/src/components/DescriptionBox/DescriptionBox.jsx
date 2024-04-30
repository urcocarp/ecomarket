import React from "react";
import style from "./DescriptionBox.module.css"

const DescriptionBox =()=>{
    return(
        <div className={style.DescriptionBox}>
            <div className={style.DescriptionBoxNavigator}>
                <div className={style.DescriptionBoxNavBox}>Description</div>
                <div className={style.DescriptionBoxNavBox}>Reviews(122)</div>
            </div>
          <div className={style.DescriptionBoxDescription}>
            <p>An e-commerce website is an online plataform that facilitates
                buying and selling of products or service over the internet
                serves as a virtual market where businesses and individuals
                showcas their products, interact whit customer, and conduct
                transaction without the need for a physical presence. E-commerce 
                websites have gained immeses popularity due to their convenince
                accessibility, and the global reach they offer </p>
                <p>E-commerce website typically display products or services along whith detalled
                    descriptions, image, prices, and any avallable variations(e.g, sires, color).
                    Each product usually has his  own dedicated page whit revelant information.
                </p>
          </div>
        </div>
    )
}
export default DescriptionBox;
