import React from 'react';
import HeaderMenu from './HeaderMenu/HeaderMenu.jsx';
import HeaderPage from './HeaderPage/HeaderPage.jsx'
import H from './Header.module.css';

const Header = () => {
   return (
    <div className={H.About}>
      <HeaderMenu />
      <div className={H.Content}>
        <HeaderPage />  
      </div>
    </div>
   )
 }

 export default Header;