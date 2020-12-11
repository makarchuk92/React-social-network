import React from 'react';
import module from './NavigationsLi.module.css';
import {NavLink} from 'react-router-dom'

const NavigationsLi = () => {
   return (
       <ul className={module.Nav__menu}>
         <li>
           <NavLink to='/Users' className={module.Nav__item} activeClassName={module.activeLink}>Users</NavLink>
         </li>
         <li>
           <NavLink to='/dialogs' className={module.Nav__item} activeClassName={module.activeLink}>Messages</NavLink>
         </li>
         <li>
           <NavLink to='/Profile' className={module.Nav__item} activeClassName={module.activeLink}>Profile</NavLink>
         </li>
       </ul>
   )
 }

 export default NavigationsLi;

