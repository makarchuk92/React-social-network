import React from 'react';
import { Link } from 'react-router-dom';
import module from './NavigationsLogo.module.css';

const NavigationsLogo = () => {
   return (
    <Link to='/'>
      <img className={module.logo}
      src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/4197/brand.gif?itok=GeU1q5PR'
      alt='Logo'></img>
   </Link>
   )
 }

 export default NavigationsLogo;

