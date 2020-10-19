import React from 'react';
import N from './NavigationsLi.module.css';
import {NavLink} from 'react-router-dom'

const NavigationsLi = () => {
   return (
       <ul className={N.Nav__menu}>
         <li>
           <NavLink to='/home' className={N.Nav__item} activeClassName={N.activeLink}>Home</NavLink>
         </li>
         <li>
           <NavLink to='/dialogs' className={N.Nav__item} activeClassName={N.activeLink}>Messages</NavLink>
         </li>
         <li>
           <NavLink to='/posts' className={N.Nav__item} activeClassName={N.activeLink}>Summary</NavLink>
         </li>
       </ul>
   )
 }

 export default NavigationsLi;

