import React from "react";
import module from "./Users.module.css";
import userPhoto from "../../images/user.png"
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { userAPI } from "../../api/api";



  let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
      pages.push(i)
    }

  return (
    <div className={module.Offer}>
      <div className={module.bullet}>
        {pages.map((p) => {
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
              <NavLink to={ "/Profile/" + u.id }>
                <img src={u.photos.small != null ? u.photos.small : userPhoto } className={module.Avatar}  alt='foto'/>
              </NavLink>
              
            </div>
          </div>
          {/* <div>
             {u.location.country}, {u.location.city}
          </div> */}
         <div className={module.NewsPost}>
            {u.followed 
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
              props.toggleFolowingProgress(true, u.id)
               userAPI.unfollow(u.id)
              // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
              //   withCredentials: true,
              //   headers: {
              //     "API-KEY": "02e4b56a-7640-4fca-a6e4-e23ca287524b"
              //   }
              // })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.unfollow(u.id)
                }
                props.toggleFolowingProgress(false, u.id)
              })
              }} className={module.unfollow}>unfollow</button> 

            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
              props.toggleFolowingProgress(true, u.id)
              userAPI.follow(u.id)
              // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
              //   withCredentials: true,
              //   headers: {
              //     "API-KEY": "02e4b56a-7640-4fca-a6e4-e23ca287524b"
              //   }
              // })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.follow(u.id)
                }
                props.toggleFolowingProgress(false, u.id)
              })
              }} className={module.follow}>follow</button> }
         </div>
        </div>
      ))}
    </div>
  );
  }


export default Users;
