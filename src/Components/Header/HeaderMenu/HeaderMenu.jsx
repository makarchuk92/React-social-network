import React from 'react';
import H from './HeaderMenu.module.css';
import {NavLink} from 'react-router-dom'

const HeaderMenu = () => {
   return (
        <div className={H.Sidebar}>
          <ul className={H.Sidebar__item}>
            <li>
              <NavLink to='/listJunior' className={H.Sidebar__text} activeClassName={H.activeLink}>Junior</NavLink> 
            </li>
            <li>
              <NavLink to='/ListMidle' className={H.Sidebar__text} activeClassName={H.activeLink}>Midle</NavLink>
            </li>
            <li>
              <NavLink to='/ListSenior' className={H.Sidebar__text} activeClassName={H.activeLink}>Senior</NavLink>
            </li>
          </ul>
        </div>
   )
 }

 export default HeaderMenu;