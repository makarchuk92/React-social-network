import React from "react"
import module from "./News.module.css"


const News = () => {

   let addNewsElements = React.createRef()

   let addNews =  () => { 
      //let textNews = addNewsElements.current.value
      
   }

   return (
      <div className={module.AddNews}>
         <textarea className={module.NewsBlock} ref={addNewsElements}></textarea>
         <div className={module.NewsPost}>
            <button onClick={addNews}  type="button">add news</button>
         </div>
      </div>
   )
}

export default News