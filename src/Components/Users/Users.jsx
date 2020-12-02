import Axios from "axios";
import React from "react";
import module from "./Users.module.css";
import * as axios from "axios"
import userPhoto from "../../images/user.png"

let Users = (props) => {
   if (props.users.length ===0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         props.setUsers(response.data.items)
      })
   }



  return (
    <div className={module.Offer}>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
               {u.name}
            </div>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto } className={module.Avatar}/>
            </div>
          </div>
          {/* <div>
             {u.location.country}, {u.location.city}
          </div> */}
         <div className={module.NewsPost}>
            {u.followed 
            ? <button onClick={ () => {props.unfollow(u.id)}}>unfollow</button> 
            : <button onClick={ () => {props.follow(u.id)}}>follow</button> }
         </div>
        </div>
      ))}
    </div>
  );
};
// <div className={module.AddNews}>
//    <textarea className={module.NewsBlock} ref={addNewsElements}></textarea>
//    <div className={module.NewsPost}>
//       <button onClick={addNews}  type="button">add news</button>
//    </div>
// </div>

export default Users;
