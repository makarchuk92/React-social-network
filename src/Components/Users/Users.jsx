import React from "react";
import module from "./Users.module.css";
import * as axios from "axios"
import userPhoto from "../../images/user.png"


class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
       this.props.setUsers(response.data.items)
    })
  }
 
  render() {
  return (
    <div className={module.Offer}>
      {this.props.users.map((u) => (
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
            ? <button onClick={ () => {this.props.unfollow(u.id)}} className={module.unfollow} activeClassName={module.activebutton} >unfollow</button> 
            : <button onClick={ () => {this.props.follow(u.id)}} className={module.follow} activeClassName={module.activebutton} >follow</button> }
         </div>
        </div>
      ))}
    </div>
  );
  }
}

export default Users;
