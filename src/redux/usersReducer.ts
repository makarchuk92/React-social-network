import { Dispatch } from "redux";
import { UserType } from "../Types/types";
import { objectUsersReducer } from "../utils/object-usersReducer";
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { userAPI } from '../api/user-api';


let inicialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array <number>
};

type inicialStateType = typeof inicialState

const usersReducer = (state = inicialState, action: ActionsTypes): inicialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: objectUsersReducer(state.users, action.userId, "id", {followed: true} )
      }

    case "UNFOLLOW":
      return {
        ...state,
        users: objectUsersReducer(state.users, action.userId, "id", {followed: false} )
      }

    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case "TOGGLE_IS_FEETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };

      case "TOGGLE_IS_FOLLOWING_PROGRESS":
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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
  followSuccess: (userId: number) => ({ type: "FOLLOW", userId } as const),
  unfollowSuccess: (userId: number) => ({ type: "UNFOLLOW", userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: "SET_USERS", users } as const),
  setCurrentPage: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
  setTotalUsersCount: (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FEETCHING", isFetching} as const),
  toggleFolowingProgress: (isFetching: boolean, userId: number) => (
    {type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const)
}

  
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>

export const requestUsers = (currentPage: number,
                             pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
  dispatch(actions.toggleIsFetching(true))
  dispatch(actions.setCurrentPage(currentPage))
  let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  } 
}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
 actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleFolowingProgress(true, userId))
    let response = await apiMethod(userId)
      if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
      }
      dispatch(actions.toggleFolowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), actions.followSuccess)
  } 
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), actions.unfollowSuccess)
  } 
}




export default usersReducer;
