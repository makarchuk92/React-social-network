import React from 'react';
import NavigationsLogo from './NavigationsLogo/NavigationsLogo.jsx'
import NavigationsLi from './NavigationsLi/NavigationsLi.jsx'
import module from './Navigations.module.css';
import { NavLink } from 'react-router-dom';

const Navigations = (props) => {
   return (
     <div className={module.block_nav}>
       <NavigationsLogo /> 
        <div className={module.Nav}>
          <NavigationsLi />
        </div>
        <div className={module.login} >
          {props.isAuth ? props.login 
           : <NavLink to='/login'>login in</NavLink> }
        </div>
     </div>
    
   )
 }

 export default Navigations;

