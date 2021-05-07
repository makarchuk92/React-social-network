import React from 'react';
import NavigationsLogo from './NavigationsLogo/NavigationsLogo'
import NavigationsLi from './NavigationsLi/NavigationsLi'
import module from './Navigations.module.css';
import { NavLink } from 'react-router-dom';

export type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

export type MapDispatchPropsType = {
  logout: () => void 
}

const Navigations: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
   return (
     <div className={module.block_nav}>
       <NavigationsLogo /> 
        <div className={module.Nav}>
          <NavigationsLi />
        </div>
        <div className={module.login} >
          {props.isAuth ? <div>{props.login} 
          <NavLink onClick={props.logout} to='/login' className={module.logout} >log out</NavLink></div> 
           : <NavLink to='/login'>login in</NavLink> }
        </div>
     </div>
    
   )
 }

 export default Navigations;

