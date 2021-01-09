import React from 'react'
import preloader from './Preloader.css'

let Preloader = () => {
   return (
      <div className={preloader} >
         <div className='lds-dual-ring'></div>
      </div>
   )
      
}

export default Preloader