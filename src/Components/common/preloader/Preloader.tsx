import React from 'react'
import './Preloader.css'

type PropsType = {}
let Preloader: React.FC<PropsType> = () => {
   return (
      <div>
         <div className='lds-dual-ring'></div>
      </div>
   )
      
}

export default Preloader