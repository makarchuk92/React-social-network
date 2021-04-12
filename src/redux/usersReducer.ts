import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { userAPI } from "../api/api";
import { UserType } from "../Types/types";
import { objectUsersReducer } from "../utils/object-usersReducer";
import { AppStateType } from './redux-store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FEETCHING = 'TOGGLE_IS_FEETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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

type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType |
                    SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | 
                    ToggleFolowingProgressActionType


type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess= (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => (
  {type: SET_CURRENT_PAGE, currentPage});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => (
  {type: SET_TOTAL_USERS_COUNT, totalUsersCount});

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FEETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => (
  {type: TOGGLE_IS_FEETCHING, isFetching});

type ToggleFolowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFolowingProgress = (isFetching: boolean, userId: number): ToggleFolowingProgressActionType => (
  {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


  
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (currentPage: number,
                             pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  } 
}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
 actionCreator: (userId: number) => FollowSuccessActionType |  UnfollowSuccessActionType) => {
  dispatch(toggleFolowingProgress(true, userId))
    let response = await apiMethod(userId)
      if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
      }
      dispatch(toggleFolowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess)
  } 
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)
  } 
}




export default usersReducer;
