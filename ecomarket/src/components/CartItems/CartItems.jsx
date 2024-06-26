import React from "react";
import style from "./CartItems.module.css"
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png"

const CartItems=()=>{
    const {all_product, getTotalCartAmount,cartItems,removeFromCart}= useContext(ShopContext)
    return (
        <div className={style.cartitems}>
            <div className={style.cartitemsFormatMain}>
                
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
            <hr />
            {all_product.map((e,key)=>{
                if(cartItems[e.id]>0)
                {
                    return<div key={key}>
                    <div className={style.cartitemsFormat}>
                        <img src={e.image} alt="" className={style.carticonProductIcon} />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                    <button className={style.cartItemQuantity}>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className={style.cartIconRemoveIcon} src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className={style.cartItemsDown}>
                <div className={style.carItemsTotal}>
                    <h1>Cart total</h1>
                    <div>
                        <div className={style.cartItemsTotalItem}>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className={style.cartItemsTotalItem}>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div  className={style.cartItemsTotalItem}>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className={style.cartItemsPromoCode}>
                    <p>If you have a promo code, Enter it here</p>
                    <div className={style.cartItemsPromoBox}>
                        <input type="text"  placeholder="Promo code"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItems;