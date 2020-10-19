import React from 'react';
import NavigationsLogo from './NavigationsLogo/NavigationsLogo.jsx'
import NavigationsLi from './NavigationsLi/NavigationsLi.jsx'
import N from './Navigations.module.css';

const Navigations = () => {
   return (
     <div className={N.Nav}>
        <NavigationsLogo />  
        <NavigationsLi />
     </div>
   )
 }

 export default Navigations;

