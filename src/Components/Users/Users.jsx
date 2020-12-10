import React from "react";
import module from "./Users.module.css";
import userPhoto from "../../images/user.png"



  let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i)
    }

  return (
    <div className={module.Offer}>
      <div className={module.bullet}>
        {pages.map(p => {
          return <span className={props.currentPage === p &&  module.bullet__active}
          onClick={ () => {props.onPageChanget(p)} }>{p}</span>
        })}

      </div>
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
            ? <button onClick={ () => {props.unfollow(u.id)}} className={module.unfollow}>unfollow</button> 
            : <button onClick={ () => {props.follow(u.id)}} className={module.follow}>follow</button> }
         </div>
        </div>
      ))}
    </div>
  );
  }


export default Users;
