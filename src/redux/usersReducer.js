const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const set_users = "SET_USERS";
const set_current_page = "SET_CURRENT_PAGE";
const set_total_users_count = "Set_Total_Users_Count"
const toggle_is_fetching = "Toggle_Is_Fetching"

let inicialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
          users: action.users
        }

        case set_current_page :
        return {
          ...state, 
          currentPage: action.currentPage
        }

        case set_total_users_count :
          return {
            ...state,
            totalUsersCount: action.totalUsersCount
          }

          case toggle_is_fetching :
            return {
              ...state,
              isFetching: action.isFetching
            }

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: follow, userId })
export const unfollowActionCreator = (userId) => ({type: unfollow, userId})
export const setUserActionCreator = (users) => ({type: set_users, users})
export const setCurrentPageActionCreator = (currentPage) => ({type: set_current_page, currentPage})
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({type: set_total_users_count, totalUsersCount})
export const toggleIsFetchingActionCreator = (isFetching) => ({type: toggle_is_fetching, isFetching})



export default usersReducer;
