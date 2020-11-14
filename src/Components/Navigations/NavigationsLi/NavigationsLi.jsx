import React from 'react';
import module from './NavigationsLi.module.css';
import {NavLink} from 'react-router-dom'

const NavigationsLi = () => {
   return (
       <ul className={module.Nav__menu}>
         <li>
           <NavLink to='/News' className={module.Nav__item} activeClassName={module.activeLink}>News</NavLink>
         </li>
         <li>
           <NavLink to='/dialogs' className={module.Nav__item} activeClassName={module.activeLink}>Messages</NavLink>
         </li>
         <li>
           <NavLink to='/posts' className={module.Nav__item} activeClassName={module.activeLink}>Summary</NavLink>
         </li>
       </ul>
   )
 }

 export default NavigationsLi;
