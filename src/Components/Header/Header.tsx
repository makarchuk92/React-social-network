import React from 'react';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderPage from './HeaderPage/HeaderPage'
import module from './Header.module.css';

const Header = () => {
   return (
    <div className={module.About}>
      <HeaderMenu />
      <div className={module.Content}>
        <HeaderPage />  
      </div>
    </div>
   )
 }

 export default Header;