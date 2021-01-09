import React, { useState } from "react"
import module from "./Paginator.module.css"
import classNames from 'classnames/bind';


const Paginator = ({portionSize = 10, ...props}) => {
   let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

   let pages = [];
   for (let i=1; i<=pagesCount; i++) {
     pages.push(i)
   }

   let portionCount = Math.ceil(pagesCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1)
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let RightPortionPageNumber = portionNumber * portionSize
   return (
      <div className={module.bullet}>
         {portionNumber > 1 &&
         <button onClick={() => {setPortionNumber(portionNumber -1) }}>Prev </button>}
         {pages
         .filter(p => p >= leftPortionPageNumber && p<= RightPortionPageNumber )
         .map((p) => { return  <span key={p} className={classNames ({
            [module.bullet__active] : props.currentPage === p
         })}
            onClick={ () =>  {props.onPageChanget(p) } } >{p}</span> 
            }) }
            {portionCount > portionNumber &&
         <button  onClick={() => {setPortionNumber(portionNumber +1) }}>Next </button>}
      </div>
   )
}

export default Paginator