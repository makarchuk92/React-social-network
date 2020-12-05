const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const set_users = "SET_USERS";


let inicialState = {
  users: [
   
  ],
}


const usersReducer = (state = inicialState, action) => {
  switch (action.type) {
    case follow :
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: true }
          }
          return u;
        })
      }

    case unfollow :
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
      
      case set_users :
        return {
          ...state, 
          users: [...state.users, ...action.users,]
        }

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: follow, userId })
export const unfollowActionCreator = (userId) => ({type: unfollow, userId})
export const setUserActionCreator = (users) => ({type: set_users, users})



export default usersReducer;
