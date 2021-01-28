import React from 'react';
import { NavLink } from 'react-router-dom';
import module from './NavigationsLogo.module.css';

const NavigationsLogo = () => {
   return (
    <NavLink to='/'>
      <img className={module.Nav__img} 
      src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/4197/brand.gif?itok=GeU1q5PR'
      alt='Logo'></img> 
   </NavLink>
   )
 }

 export default NavigationsLogo;

