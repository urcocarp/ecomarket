import React from "react";
import style from "./ProductsDisplay.module.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"



const ProductDisplay =(props)=>{
    const {product}= props;
    return (
        <div className={style.productsdisplay}>
          <div className={style.productLeft}>
            <div className={style.productImg}>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className={style.productDisplayImg}>
                <img className={style.productImgMain} src={product.image} alt="" />

            </div>
          </div>
          <div className={style.productRight}>
            <h1>{product.name}</h1>
            <div className={style.productDisplayRightStart}>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className={style.displayrightPrices}>
                <div className={style.priceOLd}>${product.old_price}</div>
                <div className={style.priceNewOld }>${product.new_price}</div>
            </div>
            <div className={style.Description}>
            A lightweight, usually knitted, pullover shirt, close-fitting and with
            a round neckline and short sleeves, worn as an undershirt or outer
            garment
            </div>
            <div className={style.productDisplay}>
                <h1>Selec size</h1>
                <div className={style.Size}>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button>ADD TO CARD</button>
                <p className={style.productCategory}><span>Category :</span>Women, T-shirt,Crop top</p>
                <p className={style.productCategory}><span>Tags :</span>Modern, Latest</p>
            </div>
          </div>
           
        </div>
    )
}
export default ProductDisplay;