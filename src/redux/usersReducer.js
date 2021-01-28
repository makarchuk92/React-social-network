import { userAPI } from "../api/api";
import { objectUsersReducer } from "../utils/object-usersReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FEETCHING = 'TOGGLE_IS_FEETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let inicialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = inicialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: objectUsersReducer(state.users, action.userId, "id", {followed: true} )
      }

    case UNFOLLOW:
      return {
        ...state,
        users: objectUsersReducer(state.users, action.userId, "id", {followed: false} )
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FEETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

      case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
          ...state,
          followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
        }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess= (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FEETCHING, isFetching});
export const toggleFolowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  } 
}


export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFolowingProgress(true, userId))
    let response = await apiMethod(userId)
      if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
      }
      dispatch(toggleFolowingProgress(false, userId))
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userId), followSuccess)
  } 
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userId), unfollowSuccess)
  } 
}




export default usersReducer;
