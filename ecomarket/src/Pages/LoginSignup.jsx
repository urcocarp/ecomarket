import React from "react";
import style from "./CSS/Login.module.css"


const LoginSignup=()=>{
    return (
        <div className={style.LoginSigUp}>
            <div className={style.LoginSigUp_container}>
                <h1>Inscribirse</h1>
              <div className={style.LoginSignup_fields}>
                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Email"/>
                <input type="password"placeholder="Contraseña"/>
              </div>
              <button>Continúa</button>
              <p className={style.LoginSigUp_Login}>¿Ya tienes una cuenta? <span>Entre aquí</span></p>
              <div className={style.LoginSignup_agree}>
                <input type="checkbox" name="" id="" />
                <p>Al continuar, acepto los términos de uso y la política de privacidad</p>

              </div>
            </div>
        </div>
    )
}
export default LoginSignup;