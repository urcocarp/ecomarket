import React from "react";
import style from "./NewLatter.module.css"

const NewLatter=()=>{
    return (
        <div className={style.newlatter}>
          <h1>Recibe ofertas exclusivas en tu correo</h1>
          <p>suscribete y mantente actualizado</p>
          <div>
            <input type="email" placeholder="Email" />
            <button>Suscribirme</button>
          </div>
        </div>
    )
}
export default NewLatter;