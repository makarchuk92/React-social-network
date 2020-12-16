import React from 'react'
import module from './Login.module.css'

const Login = () => {
   return ( 
      <div className={module.login}>
         <div><h1>Login in</h1></div>
         <div className={module.Login_offer} >
            <input type="text" placeholder="E-mail" name="email" required className={module.login_input} />
            <input type="text" placeholder="Pasword" name="Pasword" required className={module.login_input} />
            <button type="submit">Sign in</button>
         </div>   
      </div>
   
     
   )
}

export default Login