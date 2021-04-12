import React, { useState } from "react"
import module from "./Paginator.module.css"
import classNames from 'classnames'

type propsType = {
   portionSize?: number
   totalItemsCount: number
   pageSize: number
   currentPage: number
   onPageChanget: (pageNumber: number) => void
}

let Paginator: React.FC<propsType> = ({portionSize = 10, totalItemsCount, pageSize, currentPage, onPageChanget}) => {
   let pagesCount = Math.ceil(totalItemsCount / pageSize)

   let pages: Array<number> = []
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
            [module.bullet__active] : currentPage === p
         })}
            onClick={ () =>  {onPageChanget(p) } } >{p}</span> 
            }) }
            {portionCount > portionNumber &&
         <button  onClick={() => {setPortionNumber(portionNumber +1) }}>Next </button>}
      </div>
   )
}

export default Paginator