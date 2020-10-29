import React from 'react';
import NavigationsLogo from './NavigationsLogo/NavigationsLogo.jsx'
import NavigationsLi from './NavigationsLi/NavigationsLi.jsx'
import module from './Navigations.module.css';

const Navigations = () => {
   return (
     <div className={module.Nav}>
        <NavigationsLogo />  
        <NavigationsLi />
     </div>
   )
 }

 export default Navigations;

