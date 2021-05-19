import { Dispatch } from "redux";
import { UserType } from "../Types/types";
import { updateObjectInArray } from "../utils/object-usersReducer";
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { userAPI } from '../api/user-api';
import { APIResponseType } from '../api/api';


let inicialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array <number>,
  filter: {
    term: ''
  } 
};

export type inicialStateType = typeof inicialState
export type FilterType = typeof inicialState.filter

const usersReducer = (state = inicialState, action: ActionsTypes): inicialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
      }

    case "UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
      }

    case "SET_USERS":
      return {
        ...state,
        users: action.users
      };

    case "USERS/SET_FILTER":
      return {
        ...state,
        filter: action.payload
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
  setFilter: (term: string) => ({ type: "USERS/SET_FILTER", payload: {term}} as const),
  setCurrentPage: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
  setTotalUsersCount: (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FEETCHING", isFetching} as const),
  toggleFolowingProgress: (isFetching: boolean, userId: number) => (
    {type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const)
}

  
type ThunkType = BaseThunkType<ActionsTypes>

export const requestUsers = (currentPage: number,
                             pageSize: number,
                             term: string): ThunkType => {
  return async (dispatch, getState) => {
  dispatch(actions.toggleIsFetching(true))
  dispatch(actions.setCurrentPage(currentPage))
  dispatch(actions.setFilter(term))

  let data = await userAPI.getUsers(currentPage, pageSize, term)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  } 
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: (userId: number) => Promise<APIResponseType>,
 actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleFolowingProgress(true, userId))
    let response = await apiMethod(userId)
      if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
      }
      dispatch(actions.toggleFolowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), actions.followSuccess)
  } 
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), actions.unfollowSuccess)
  } 
}




export default usersReducer;
