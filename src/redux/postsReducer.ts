import { stopSubmit } from "redux-form";

import { PhotosType, PostDataType, ProfileType } from "../Types/types";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { profileAPI } from "../api/profile-api";


const add_Post = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"



let initialState =  {
  postData: [
    { id: 1, text: "I am Andrew and my profession It", LikeUp: 12 },
  ] as Array<PostDataType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: ""
}

export type initialStateType = typeof initialState

const postsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case add_Post: 
      let newPost = {
        id: 3,
        text: action.newPostText,
        LikeUp: 0,
      };
      
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
      }

      case SET_USER_PROFILE :
        return {
          ...state,
          profile: action.profile
        }

        case SET_STATUS:
          return {
            ...state,
            status: action.status
          }

          case SAVE_PHOTO_SUCCESS:
            return {
              ...state,
              profile: {...state.profile, photos: action.photos} as ProfileType 
            }

    default:
      return state;
  }
};

type ActionsTypes = addPostActionCreatorType | setUserProfileActionType | setStatusActionType | 
                    savePhotoSuccessActionType

type addPostActionCreatorType = {
  type: typeof add_Post
  newPostText: string
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => ( { 
  type: add_Post, newPostText})

type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({
  type: SET_USER_PROFILE, profile
})

type setStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): setStatusActionType => ({
  type: SET_STATUS, status
})

type savePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS, photos
})

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: number): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.getProfile(userId)
       dispatch(setUserProfile(data))
  }
}

export const getUserStatus = (userId: number): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.getStatus(userId)
      dispatch(setStatus(data))
  }
}

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.updateStatus(status)
      if(data.resultCode === 0) {
        dispatch(setStatus(status))
      }
  }
}


export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
      if(data.resultCode === 0) {
        dispatch(getUserProfile(userId))
      } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
      }
  }
}


export const savePhoto = (photoFile: PhotosType ): ThunkType => {
  return async (dispatch, getState) => {
    let data = await profileAPI.savePhoto(photoFile)
      if(data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
      }
  }
}

export default postsReducer;
