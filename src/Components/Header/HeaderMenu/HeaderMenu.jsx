import React from 'react';
import module from './HeaderMenu.module.css';
import {NavLink} from 'react-router-dom'

const HeaderMenu = () => {
   return (
        <div className={module.Sidebar}>
          <ul className={module.Sidebar__item}>
            <li>
              <NavLink to='/Junior' className={module.Sidebar__text} activeClassName={module.activeLink}>Junior</NavLink> 
            </li>
            <li>
              <NavLink to='/Midle' className={module.Sidebar__text} activeClassName={module.activeLink}>Midle</NavLink>
            </li>
            <li>
              <NavLink to='/Senior' className={module.Sidebar__text} activeClassName={module.activeLink}>Senior</NavLink>
            </li>
          </ul>
        </div>
   )
 }

 export default HeaderMenu;